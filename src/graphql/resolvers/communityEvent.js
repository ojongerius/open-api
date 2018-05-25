import {
  getCommunityEvent,
  createCommunityEvent,
  deleteCommunityEvent
} from '../../dataLayer/mongo/communityEvent';

export const communityEventResolvers = {
  Query: {
    getCommunityEvent
  },
  Mutation: {
    createCommunityEvent,
    deleteCommunityEvent
  }
};
