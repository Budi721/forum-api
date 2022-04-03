const AddedThread = require('../AddedThread');

describe('AddedThread', () => {
  it('should throw error when payload not contain needed property', () => {
    const payload = {
      id: 'thread-h_W1Plfpj0TY7wyT2PUPX',
      title: 'sebuah thread',
    };

    expect(() => new AddedThread(payload)).toThrowError('ADDED_THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when not meet data type specification', () => {
    const payload = {
      id: 'thread-h_W1Plfpj0TY7wyT2PUPX',
      title: 1221,
      owner: 'user-DWrT3pXe1hccYkV1eIAxS',
    };

    expect(() => new AddedThread(payload)).toThrowError('ADDED_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should create new added thread instance correctly', () => {
    const payload = {
      id: 'thread-h_W1Plfpj0TY7wyT2PUPX',
      title: 'sebuah thread',
      owner: 'user-DWrT3pXe1hccYkV1eIAxS',
    };

    const addedThread = new AddedThread(payload);

    expect(addedThread).toBeInstanceOf(AddedThread);
    expect(addedThread.id).toEqual(payload.id);
    expect(addedThread.title).toEqual(payload.title);
    expect(addedThread.owner).toEqual(payload.owner);
  });
});
