/* eslint-disable camelcase */

exports.up = pgm => {
  pgm.createTable('threads', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    title: {
      type: 'TEXT',
      notNull: true,
    },
    body: {
      type: 'TEXT',
      notNull: true,
    },
    create_at: {
      type: 'TEXT',
      notNull: true,
    },
    user_id: {
      type: 'VARCHAR(50)',
      notNull: true,
      reference: '"users"',
      onDelete: 'CASCADE'
    }
  });

  pgm.createTable('comments', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    content: {
      type: 'TEXT',
      notNull: true,
    },
    created_at: {
      type: 'TEXT',
      notNull: true,
    },
    deleted_at: {
      type: 'TEXT',
      notNull: false,
    },
    thread_id: {
      type: 'VARCHAR(50)',
      notNull: true,
      reference: '"threads"',
      onDelete: 'CASCADE'
    },
    user_id: {
      type: 'VARCHAR(50)',
      notNull: true,
      reference: '"users"',
      onDelete: 'CASCADE'
    }
  })
};

exports.down = pgm => {
  pgm.dropTable('threads');
  pgm.dropTable('comments');
};
