// tslint:disable
// graphql typescript definitions


  export interface IGraphQLResponseRoot {
    data?: IQuery;
    errors?: Array<IGraphQLResponseError>;
  }

  export interface IGraphQLResponseError {
    message: string;            // Required for all errors
    locations?: Array<IGraphQLResponseErrorLocation>;
    [propName: string]: any;    // 7.2.2 says 'GraphQL servers may provide additional entries to error'
  }

  export interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  /**
    description: Query type for all get requests which will not change persistent data
  */
  export interface IQuery {
    __typename?: "Query";
    login: IUserTokenType | null;
}

  
  export interface IUserTokenType {
    __typename?: "UserTokenType";
    token: string | null;
    user: IUserType | null;
}

  
  export interface IUserType {
    __typename?: "UserType";
    id: number | null;
    username: string | null;
    type: string | null;
    settings: IUserSettings | null;
}

  
  export interface IUserSettings {
    __typename?: "UserSettings";
    sidebar: boolean | null;
    language: string | null;
}


// tslint:enable
