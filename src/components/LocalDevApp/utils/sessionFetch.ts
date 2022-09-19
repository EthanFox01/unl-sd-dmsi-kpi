const sessionFetch = (initialBranch: string) =>
  fetch('/graphql', {
    method: 'POST',
    headers: {
      authorization: `dmsi Branch=${initialBranch}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
                query SESSION_INFO {
                    agilitySession {
                        branch {
                          zoneName
                        }
                        branches {
                          branchID
                          profName
                          companyName
                        }
                        menu {
                          key
                          allowed
                        }
                        actionAllocations {
                          token
                          allowed
                        }
                        properties {
                          agilityVersion
                          username
                          dbName
                          dbEnvironment
                          userEmail
                        }
                      }
                      meta {
                        version
                      }
                  }
            `,
    }),
  });

export default sessionFetch;
