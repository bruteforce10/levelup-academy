import { parseValue } from "graphql";
import request, { gql } from "graphql-request";

export const signUp = async (userData) => {
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
        name
        email
        image {
          url
        }
        password
      }
      publishAccount(where: {email: "` +
    userData.email +
    `"}) {
        id
      }
    }
  `;

  try {
    const result = await request(
      "https://ap-southeast-2.cdn.hygraph.com/content/clnrgq1m6llmt01uo7zk9hnhc/master",
      mutationQuery
    );
    return result.createAccount;
  } catch (err) {
    return err;
  }
};

export const signUpWithGoogle = async (userData) => {
  const whereQuery =
    gql`
    query MyQuery {
      accounts(where: { email: "` +
    userData.email +
    `" }) {
        id
      }
    }
  `;

  const resultWhere = await request(
    "https://ap-southeast-2.cdn.hygraph.com/content/clnrgq1m6llmt01uo7zk9hnhc/master",
    whereQuery
  );

  if (resultWhere.accounts.length > 0) {
    const query =
      gql`
    mutation MyMutation {
      updateAccount(
        data: { email: "` +
      userData.email +
      `", name: "` +
      userData.name +
      `" }
        where: { email: "` +
      userData.email +
      `" }
      ) {
        id
        name
        email
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
      query
    );
    console.log(result.updateAccount);
    return result.updateAccount;
  } else {
    const result = await signUp(userData);
    console.log(result);
    return result;
  }
};

export const getUser = async (userData) => {
  const query =
    gql`
    query Accounts {
      accounts(where: { email_contains: "` +
    userData.email +
    `" }) {
        email
        name
        id
        image {
          url
        }
        role
        password
      }
    }
  `;
  const result = await request(
    "https://ap-southeast-2.cdn.hygraph.com/content/clnrgq1m6llmt01uo7zk9hnhc/master",
    query
  );
  return result.accounts[0];
};

export const getUserName = async (id) => {
  const query =
    gql`
    query MyQuery {
      account(where: { id: "` +
    id +
    `" }) {
        id
        name
        email
        image {
          url
        }
        password
      }
    }
  `;
  const result = await request(
    "https://ap-southeast-2.cdn.hygraph.com/content/clnrgq1m6llmt01uo7zk9hnhc/master",
    query
  );
  return result;
};

export const updateUser = async (data) => {
  const query =
    gql`
    mutation MyMutation {
      updateAccount(
        data: { image: { connect: { id: "` +
    data.id +
    `" } } }
        where: { id: "` +
    data.name +
    `" }
      ) {
        id
        image {
          url
        }
      }
      publishAsset(where: { id: "` +
    data.id +
    `" }) {
        id
      }
      publishAccount(where: { id: "` +
    data.name +
    `" }) {
        id
      }
    }
  `;

  const result = await request(
    "https://ap-southeast-2.cdn.hygraph.com/content/clnrgq1m6llmt01uo7zk9hnhc/master",
    query
  );
  return result;
};

export const updateGoal = async (data) => {
  const query =
    gql`
    mutation MyMutation {
      updateAccount(data: { goals: "` +
    data.goals +
    `" }, where: { id: "` +
    data.id +
    `" }) {
        id
        email
        image {
          url
        }
        password
      }
    }
  `;

  const result = await request(
    "https://ap-southeast-2.cdn.hygraph.com/content/clnrgq1m6llmt01uo7zk9hnhc/master",
    query
  );
  return result;
};

export const postComment = async (data) => {
  const query =
    gql`
    mutation MyMutation {
      createTestimoniLevelup(
        data: {
          title: "` +
    data.title +
    `"
          description: "` +
    String(data.desc) +
    `"
          account: { connect: { email: "` +
    data.email +
    `" } }
        }
      ) {
        id
      }
    }
  `;

  const result = await request(
    "https://ap-southeast-2.cdn.hygraph.com/content/clnrgq1m6llmt01uo7zk9hnhc/master",
    query
  );
  return result;
};

export const getComments = async () => {
  const query = gql`
    query MyQuery {
      testimoniLevelups {
        id
        title
        description
        account {
          image {
            url
          }
          name
          goals
        }
      }
    }
  `;
  const result = await request(
    "https://ap-southeast-2.cdn.hygraph.com/content/clnrgq1m6llmt01uo7zk9hnhc/master",
    query
  );
  return result.testimoniLevelups;
};
