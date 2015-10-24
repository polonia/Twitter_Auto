Tweets = new Meteor.Collection( 'tweets' );

Collection.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Collection.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let CollectionSchema = new SimpleSchema({
  "owner": {
    type: String,
    label: "The ID of the owner of this tweet."
  },
  "text": {
    type: String,
    label: "The text of the tweet."
  }
});

Collection.attachSchema( CollectionSchema );
