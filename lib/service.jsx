import request, { gql } from "graphql-request";

export const signUp = async (userData) => {
  console.log(userData);
  const mutationQuery =
    gql`
    mutation MyMutation {
      createAccount(data: { 
        name: "` +
    userData.name +
    `", 
        email:  "` +
    userData.email +
    `", 
        password:  "` +
    userData.password +
    `" ,
    role:"member",
    }) {
        id
      }
      publishAccount(where: {email: "` +
    userData.email +
    `"}) {
        id
      }
    }
  `;

  const result = await request(
    "https://ap-southeast-2.cdn.hygraph.com/content/clnrgq1m6llmt01uo7zk9hnhc/master",
    mutationQuery
  );
  console.log(result);
};
