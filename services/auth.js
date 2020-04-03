import fetch from "isomorphic-unfetch";

async function createUser(pwd) {
  const request = await fetch("https://paassword.now.sh/api/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ pwd })
  });

  if (request.ok) {
    const { id } = await request.json();

    return id;
  }
}

async function validatePassword(passwordId, pwd) {
  const request = await fetch(
    `https://paassword.now.sh/api/get/${passwordId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ pwd })
    }
  );

  if (request.ok) {
    const { valid } = await request.json();

    return valid;
  }
}

export default {
  validatePassword,
  createUser
};
