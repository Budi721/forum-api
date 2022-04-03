const NewThread = require('../NewThread');

describe('NewThread', () => {
  it('should throw error when payload not contain needed property', () => {
    const payload = {
      title: 'test',
    };

    expect(() => new NewThread(payload)).toThrowError('NEW_THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload not meet data type specification', () => {
    const payload = {
      title: 123,
      body: 'test',
    };

    expect(() => new NewThread(payload)).toThrowError('NEW_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should create new thread instance correctly', () => {
    const payload = {
      title: 'test',
      body: 'test',
    };

    const newThread = new NewThread(payload);
    expect(newThread).toBeInstanceOf(NewThread);
    expect(newThread.title).toEqual(payload.title);
    expect(newThread.body).toEqual(payload.body);
  });
});
