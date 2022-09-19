const loginFetch = (username: string, password: string) =>
  fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
                mutation Login {
                    login(
                        input: {
                            LoginID: "${username}"
                            Password: "${password}"
                            Product: "Agility"
                            SubProduct: "WS"
                            clientMutationId: "agilityLoginMutation"
                        }
                    ) {
                        InitialBranch
                        SessionContextID
                        A2WSessionToken
                        AgilityVersion
                    }
                  }
            `,
    }),
  });

export default loginFetch;
