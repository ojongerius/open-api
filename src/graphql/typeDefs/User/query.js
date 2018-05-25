export default `
type Query {
  getUser(email: String
          id: String
  ): User @isAuthenticatedOnQuery
}
`;
