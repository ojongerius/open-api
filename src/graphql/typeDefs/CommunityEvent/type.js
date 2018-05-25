import InputTypes from './input';

export default `
type CommunityEvent {
  id: String
  title: String!
  description: String!
  owner: String!
  attendees: [User]
  date: String!
  imageUrl: String
}

${InputTypes}

`;
