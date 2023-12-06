import { data } from "autoprefixer";
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
        gambar {
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
        goals
        gambar {
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
        gambar {
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
        data: { gambar: { connect: { id: "` +
    data.id +
    `" } } }
        where: { id: "` +
    data.name +
    `" }
      ) {
        id
        gambar {
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

export const updateUserWithImage = async (data) => {
  const query =
    gql`
    mutation MyMutation {
      updateAccount(
        data: {name: "` +
    data.name +
    `", email: "` +
    data.email +
    `", gambar: {connect: {id: "` +
    data.id +
    `"}}, goals:  "` +
    data.goals +
    `"}
        where: {email: "` +
    data.email +
    `"}
      ) {
        id
        gambar {
          url
        }
      }
      publishAsset(where: { id: "` +
    data.id +
    `" }) {
        id
      }
      publishAccount(where: { id: "` +
    data.userId +
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

export const updateUserWithNoImage = async (data) => {
  const query =
    gql`
    mutation MyMutation {
      updateAccount(
        data: {name: "` +
    data.name +
    `", email: "` +
    data.email +
    `", goals:  "` +
    data.goals +
    `"}
        where: {email: "` +
    data.email +
    `"}
      ) {
        id
        gambar {
          url
        }
      }
      publishAsset(where: { id: "` +
    data.id +
    `" }) {
        id
      }
      publishAccount(where: { id: "` +
    data.userId +
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
        gambar {
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
          gambar {
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

export const getClass = async () => {
  const query = gql`
    query MyQuery {
      courses {
        createdAt
        judul
        category
        id
        level
        gambar {
          url
        }
        price
        sertifikat
        reviews {
          rating
        }
      }
    }
  `;
  const result = await request(
    "https://ap-southeast-2.cdn.hygraph.com/content/clnrgq1m6llmt01uo7zk9hnhc/master",
    query
  );
  return result.courses;
};

export const getClassById = async (id) => {
  const query =
    gql`
    query MyQuery {
      course(where: { id: "` +
    id +
    `" }) {
        createdAt
        judul
        id
        keyPoints
        level
        price
        couroselGambar {
          url
          fileName
        }
        gambar {
          url
        }
        gambarClass {
          url
        }
        sertifikat
        about {
          html
        }
        designedFor
        softwareList {
          software
          link
          free
          softwareName
        }
        sillabusList {
          judulBab
          subBab
        }
        reviews {
          ulasan
          rating
          accounts {
            gambar {
              url
            }
            goals
            name
          }
        }
        introduction
        authorCourse {
          ... on AuthorCourse {
            image {
              url
            }
            label
            author
          }
        }
      }
    }
  `;
  const result = await request(
    "https://ap-southeast-2.cdn.hygraph.com/content/clnrgq1m6llmt01uo7zk9hnhc/master",
    query
  );
  return result.course;
};

export const paymentRequest = async (data) => {
  console.log(data);
  const query =
    gql`
    mutation MyMutation {
      updateAccount(
        data: {payment: {create: {data: {coursePayment: {connect: {Course: {id: "` +
    data.id +
    `"}}}, statusPayment: paymentPending,
    linkPayment: "` +
    data.link +
    `",
    idPayment:"` +
    data.idPayment +
    `",
    time: "` +
    data.time +
    `"}}}}
        where: {email: "` +
    data.email +
    `"}
      ) {
        id
        name
        payment {
          linkPayment
        }
      }
      publishAccount(where: {email: "` +
    data.email +
    `"}) {
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

export const getPaymentUser = async (email) => {
  const query =
    gql`
    query MyQuery {
      account(where: { email: "` +
    email +
    `" }) {
        payment {
          coursePayment {
            ... on Course {
              id
              judul
              gambar {
                url
              }
              price
              linkClass
              discount
              updatedAt
            }
          }
          idPayment
          id
          statusPayment
          linkPayment
          time
        }
        updatedAt
      }
    }
  `;

  const result = await request(
    "https://ap-southeast-2.cdn.hygraph.com/content/clnrgq1m6llmt01uo7zk9hnhc/master",
    query
  );

  return result?.account?.payment;
};

export const createReview = async (data) => {
  const query =
    gql`
    mutation MyMutation {
      createReview(
        data: {
          accounts: { connect: { email: "` +
    data?.email +
    `" } }
          course: { connect: { id: "` +
    data?.class +
    `" } }
          rating: ` +
    `${parseInt(data?.rating)}` +
    `
          ulasan: "` +
    data?.desc +
    `"
        }
      ) {
        id
      }
      publishAccount(where: {email:  "` +
    data.email +
    `"}) {
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

export const publishReview = async (id) => {
  console.log(id);
  const query =
    gql`
    mutation MyMutation {
      publishReview(where: { id: "` +
    id +
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

export const getManyReview = (data) => {
  const query =
    gql`
    query MyQuery {
      reviews(
        where: {
          course: { id: "` +
    data?.class +
    `" }
          accounts_some: { email: "` +
    data?.email +
    `" }
        }
      ) {
        id
      }

    }
  `;
  const result = request(
    "https://ap-southeast-2.cdn.hygraph.com/content/clnrgq1m6llmt01uo7zk9hnhc/master",
    query
  );
  return result;
};

export const updatePassword = async (data) => {
  const query =
    gql`
    mutation MyMutation {
      updateAccount(data: { password: "` +
    data.password +
    `" }, where: { email: "` +
    data.email +
    `" }) {
        id
      }
      publishAccount(where: {email:  "` +
    data.email +
    `"}) {
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

export const getBundle = async (data) => {
  if (data) {
    console.log(data);
    const query =
      gql`
      query Assets {
        bundles(where: { slug: "` +
      data +
      `" }) {
          coverGambar {
            url
          }
          desc
          gambar {
            url
          }
          harga
          id
          slug
          secondJudul
          judul
          listCareer
          listCocok
          courses {
            judul
            id
            descBundle
            gambar {
              url
            }
          }
        }
      }
    `;
    const result = await request(
      "https://ap-southeast-2.cdn.hygraph.com/content/clnrgq1m6llmt01uo7zk9hnhc/master",
      query
    );
    return result.bundles[0];
  } else {
    const query = gql`
      query Assets {
        bundles {
          coverGambar {
            url
          }
          desc
          gambar {
            url
          }
          harga
          id
          secondJudul
          slug
          judul
          listCareer
          listCocok
          courses {
            judul
            id
            descBundle
          }
        }
      }
    `;
    const result = await request(
      "https://ap-southeast-2.cdn.hygraph.com/content/clnrgq1m6llmt01uo7zk9hnhc/master",
      query
    );
    return result;
  }
};

export const getSearchUser = async (email) => {
  const query =
    gql`
    query MyQuery {
      account(where: { email: "` +
    email +
    `" }) {
        email
      }
    }
  `;
  const result = await request(
    "https://ap-southeast-2.cdn.hygraph.com/content/clnrgq1m6llmt01uo7zk9hnhc/master",
    query
  );
  return result?.account?.email;
};

export const getAllClass = async () => {
  const query = gql`
    query MyQuery {
      courses {
        gambar {
          url
        }
        id
        judul
      }
    }
  `;
  const result = await request(
    "https://ap-southeast-2.cdn.hygraph.com/content/clnrgq1m6llmt01uo7zk9hnhc/master",
    query
  );
  return result?.courses;
};

export const getStatusClass = async (email) => {
  const query =
    gql`
    query MyQuery {
      account(where: { email: "` +
    email +
    `" }) {
        payment {
          statusPayment
          linkPayment
          idPayment
          coursePayment {
            ... on Course {
              id
              judul
              gambar {
                url
              }
              price
              linkClass
              discount
              updatedAt
            }
          }
          id
        }
      }
    }
  `;
  const result = await request(
    "https://ap-southeast-2.cdn.hygraph.com/content/clnrgq1m6llmt01uo7zk9hnhc/master",
    query
  );
  return result?.account?.payment;
};

export const setUserCourse = async (data) => {
  const query =
    gql`
    mutation MyMutation {
      updateAccount(
        data: {
          payment: {
            create: {
              data: {
                coursePayment: { connect: { Course: { id: "` +
    data.idClass +
    `" } } }
                statusPayment: paymentSuccess
              }
            }
          }
        }
        where: { email: "` +
    data.email +
    `" }
      )
      {
        email
        id
      }
      publishAccount(where: { email: "` +
    data.email +
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

export const updateCoursePayment = async (data) => {
  if (data.payment === "PaymentFailed") {
    const query =
      gql`
  mutation MyMutation {
    updateAccount(
      data: {
        payment: {
          update: {
            where: { id: "` +
      data.id +
      `" }
            data: { statusPayment: PaymentFailed }
          }
        }
      }
      where: { email: "` +
      data.email +
      `" }
  ) {
    id
    payment {
      statusPayment
    }
  }
  publishAccount(where: { email: "` +
      data.email +
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
  } else {
    const query =
      gql`
    mutation MyMutation {
      updateAccount(
        data: {
          payment: {
            update: {
              where: { id: "` +
      data.id +
      `" }
              data: { statusPayment: paymentSuccess }
            }
          }
        }
        where: { email: "` +
      data.email +
      `" }
    ) {
      id
      payment {
        statusPayment
      }
    }
    publishAccount(where: { email: "` +
      data.email +
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
  }
};
