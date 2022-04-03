const ThreadsTableTestHelper = require('../../../../tests/ThreadsTableTestHelper');
const pool = require('../../database/postgres/pool');
const NewThread = require('../../../Domains/threads/entities/NewThread');
const AddedThread = require('../../../Domains/threads/entities/AddedThread');
const ThreadsRepositoryPostgres = require('../ThreadsRepositoryPostgres');

describe('ThreadRepository postgres', () => {
  afterEach(async () => {
    await ThreadsTableTestHelper.cleanTable();
  });

  afterAll(async () => {
    await pool.end();
  });

  describe('addThread function', () => {
    it('should persist add thread and return correctly', async () => {
      // Arrange
      const newThread = new NewThread({
        title: 'title',
        body: 'body',
      });

      const fakeIdGenerator = () => '123';
      const threadRepository = new ThreadsRepositoryPostgres(pool, fakeIdGenerator);

      // Action
      await threadRepository.addThread(newThread);

      // Assert
      const threads = await ThreadsRepositoryPostgres.findThreadsById('thread-123');
      expect(threads).toHaveLength(1);
    });

    it('should return added thread correctly', async () => {
      // Arrange
      const newThread = new NewThread({
        title: 'title',
        body: 'body',
      });

      const fakeIdGenerator = () => '123';
      const threadRepository = new ThreadsRepositoryPostgres(pool, fakeIdGenerator);

      // Action
      const addedThread = await threadRepository.addThread(newThread);

      expect(addedThread).toStrictEqual(new AddedThread({
        id: 'thread-123',
        title: 'title',
        owner: 'user-123',
      }));
    });
  });
});
