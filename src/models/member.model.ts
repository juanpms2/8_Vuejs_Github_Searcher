export interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}

export const createDefaultMemberEntity = (): MemberEntity => ({
  id: -1,
  login: '',
  avatar_url: '',
});

export const createDefaultMembersEntity = (): Array<MemberEntity> => {
  return [{ id: -1, login: '', avatar_url: '' }];
};
