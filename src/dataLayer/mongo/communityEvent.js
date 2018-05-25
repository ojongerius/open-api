// import validator from 'validator';
import CommunityEventModel from '../model/communityEvent.js';
import debug from 'debug';
import uuid from 'uuid/v4';
import { isEmpty, isString } from 'lodash';

import { asyncErrorHandler } from '../../utils';
import { verifyWebToken, namespace, updateAppMetaData } from '../../auth';

const log = debug('fcc:dataLayer:mongo:event');

function doesExist(Model, options) {
  return Model.find(options).exec();
}

// // Get one event (TODO: what do we allow searching on?)
// export function getCommunityEvent(root, { title }) {
//   // return new Promise(async function getCommunityEventPromise(resolve, reject) {
//   //   if (!isString(title)) {
//   //     reject(
//   //       new TypeError('Expected an event title')
//   //     );
//   //     return null;
//   //   }
//   //   log(`finding event for ${title}`);
//   //   const found = await CommunityEventModel.findOne({ title }).exec();
//   //   log(`found? ${!!found}`);
//   //   if (isEmpty(found)) {
//   //     reject(new Error(`No event found for ${title}`));
//   //     return null;
//   //   }
//   //   return resolve(found);
//   // });
// }

// Delete event, should only be allowed by creator and / or admin
export async function getCommunityEvent(root, vars, ctx) {
  // const { decoded } = verifyWebToken(ctx);
  // const { accountLinkId } = vars;
  // const loggedInId = decoded[namespace + 'accountLinkId'];
  // if (loggedInId !== accountLinkId) {
  //   throw new Error('You can delete only your account');
  // }
  // const removedUser = await EventModel.findOneAndRemove({ accountLinkId });
  // if (!removedUser) {
  //   throw new Error(
  //     'There is no account with this accountLinkId ' + accountLinkId
  //   );
  // }
  // return removedUser;
}

// // Get all events (TODO: what do we allow searching on? Needs pagination)
// export function getEvents(root, { email }) {
//   return new Promise(async function getUserPromise(resolve, reject) {
//     if (!isString(email) || !validator.isEmail(email)) {
//       reject(
//         new TypeError(`Expected a valid email, got ${JSON.stringify(email)}`)
//       );
//       return null;
//     }
//     log(`finding user for ${email}`);
//     const found = await UserModel.findOne({ email }).exec();
//     log(`found? ${!!found}`);
//     if (isEmpty(found)) {
//       reject(new Error(`No user found for ${email}`));
//       return null;
//     }
//     return resolve(found);
//   });
// }

export async function createCommunityEvent(root, vars, ctx) {
  // const { decoded } = verifyWebToken(ctx);
  // const { email, name, sub: id } = decoded;
  // if (!isString(email) || !validator.isEmail(email)) {
  //   throw new Error('You must provide a valid email');
  // }
  // const newUser = { name, email };
  // let accountLinkId = decoded[namespace + 'accountLinkId'];
  // if (accountLinkId) {
  //   newUser.accountLinkId = accountLinkId;
  // } else {
  //   accountLinkId = uuid();
  //   newUser.accountLinkId = accountLinkId;
  //   updateAppMetaData(id, { accountLinkId });
  // }
  // const exists = await asyncErrorHandler(
  //   doesExist(CommunityEventModel, { accountLinkId })
  // );
  // if (isEmpty(exists)) {
  //   const newAccount = new CommunityEventModel(newUser);
  //   return await asyncErrorHandler(
  //     newAccount.save(),
  //     'Something went wrong creating your account, please try again'
  //   );
  // } else {
  //   throw new Error('Account already in use');
  // }
}

// Update an event
// export async function updateEvent(root, vars, ctx) {
//   const { decoded } = verifyWebToken(ctx);
//   const { email, name, sub: id } = decoded;
//   if (!isString(email) || !validator.isEmail(email)) {
//     throw new Error('You must provide a valid email');
//   }
//   const newUser = { name, email };
//   let accountLinkId = decoded[namespace + 'accountLinkId'];
//   if (accountLinkId) {
//     newUser.accountLinkId = accountLinkId;
//   } else {
//     accountLinkId = uuid();
//     newUser.accountLinkId = accountLinkId;
//     updateAppMetaData(id, { accountLinkId });
//   }
//   const exists = await asyncErrorHandler(
//     doesExist(UserModel, { accountLinkId })
//   );
//   if (isEmpty(exists)) {
//     const newAccount = new UserModel(newUser);
//     return await asyncErrorHandler(
//       newAccount.save(),
//       'Something went wrong creating your account, please try again'
//     );
//   } else {
//     throw new Error('Account already in use');
//   }
// }

// Delete event, should only be allowed by creator and / or admin
export async function deleteCommunityEvent(root, vars, ctx) {
  // const { decoded } = verifyWebToken(ctx);
  // const { accountLinkId } = vars;
  // const loggedInId = decoded[namespace + 'accountLinkId'];
  // if (loggedInId !== accountLinkId) {
  //   throw new Error('You can delete only your account');
  // }
  // const removedUser = await EventModel.findOneAndRemove({ accountLinkId });
  // if (!removedUser) {
  //   throw new Error(
  //     'There is no account with this accountLinkId ' + accountLinkId
  //   );
  // }
  // return removedUser;
}
