import {
  MemberEntity,
  createDefaultMemberEntity,
  UserEntity,
  createDefaultUserEntity,
} from 'models';

const checkStatus = (response: Response): Promise<Response> => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    let error = new Error(response.statusText);
    throw error;
  }
};

const parseJSON = (response: Response) => {
  return response.json();
};

const resolveMembers = (data: any): Promise<MemberEntity[]> => {
  const members = data.map(gitHubMember => {
    var member: MemberEntity = createDefaultMemberEntity();

    member.id = gitHubMember.id;
    member.login = gitHubMember.login;
    member.avatar_url = gitHubMember.avatar_url;

    return member;
  });

  return Promise.resolve(members);
};

export const getAllMembers = (organizationName: string): Promise<MemberEntity[]> => {
  const gitHubMembersUrl: string = `https://api.github.com/orgs/${organizationName}/members`;

  return fetch(gitHubMembersUrl)
    .then(response => checkStatus(response))
    .then(response => parseJSON(response))
    .then(data => resolveMembers(data));
};

export const getUser = (login: string): Promise<UserEntity> => {
  const gitHubUserUrl: string = `https://api.github.com/users/${login}`;

  return fetch(gitHubUserUrl)
    .then(response => checkStatus(response))
    .then(response => parseJSON(response))
    .then(data => resolveUser(data));
};

const resolveUser = (data: UserEntity): Promise<UserEntity> => {
  const user: UserEntity = { ...data };

  return Promise.resolve(user);
};
