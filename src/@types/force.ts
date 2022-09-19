type BranchProperties = {
  branchTimeZone: string;
  zoneAbbreviation: string;
  zoneName: string;
};

type BranchList = {
  branchID: string;
  companyName: string;
  id: string;
  profName: string;
};

export type MenuSecurity = {
  allowed: boolean;
  childMenuGroup: unknown;
  key: string;
  label: string;
  menuGroup: unknown;
};

export type ActionAllocation = {
  allowed: boolean;
  module: string;
  program: string;
  securityBranch: string;
  token: string;
};

type SessionProperties = {
  agilityVersion: string;
  dateFormat: string;
  dbEnvironment: string;
  dbName: string;
  userEmail: string;
  userID: string;
  username: string;
};

type AgilitySession = {
  branch: BranchProperties;
  branches: BranchList[];
  menu: MenuSecurity[];
  actionAllocations: ActionAllocation[];
  properties: SessionProperties;
};

type Meta = {
  version: string;
  services: string[];
};

type AgilitySessionData = {
  agilitySession: AgilitySession;
  meta: Meta;
};

export type ForceSessionData = AgilitySessionData & {
  defaultBranch: string;
};
