import { MemberEntity, createDefaultMembersEntity } from 'models';

export interface PropsData {
  members: MemberEntity[];
  company: string;
  error: string;
  organization: string;
  loading: boolean;
  //props pagination
  page: number;
  totalPage: number;
  increment: number;
  init: number;
  fin: number;
  totalMember: number;
  membersCard: MemberEntity[];
  // alert error
  alert: boolean;
  txtSearchUser: string;
}

export const createDefaultPropsData = (): PropsData => ({
  members: createDefaultMembersEntity(),
  company: '',
  error: '',
  organization: '',
  loading: true,
  //props pagination
  page: 1,
  totalPage: 2,
  increment: 4,
  init: 0,
  fin: 4,
  totalMember: 0,
  membersCard: [],
  //Alert error
  alert: false,
  txtSearchUser: '',
});
