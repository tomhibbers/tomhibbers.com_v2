import styled from "styled-components";

export const Container = styled.section`
  margin-top: 20rem;

  header {
    text-align: center;
    h2 {
      text-align: center;
      font-size: 4rem;
    }
    p {
      color: var(--green);
      font-weight: 500;
    }
  }
  .reCaptcha-Wrapper div {
    overflow: hidden;
  }
  .contacts {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    place-items: center;
    margin-top: 4rem;
    margin-bottom: 4rem;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      max-width: 40rem;
      gap: 2rem;
      background-color: var(--green);
      border-radius: 1.4rem;
      padding: 1.6rem 2.8rem;
      transition: background-color 0.25s;
      color: var(--black);
      font-weight: 500;
      img {
        width: 4rem;
      }
      &:hover {
        background-color: var(--pink);
        color: #fff;
      }
    }
  }
  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    input,
    textarea {
      width: 60rem;
      padding: 1rem 2rem;
      border-radius: 1.6rem;
      outline: none;
      border: none;
      background: none;
      border: 1px solid #fff;
      color: white;
      font-weight: 600;
      &::placeholder {
        color: #fff;
      }
    }

    textarea {
      height: 20rem;
      overflow-y: auto;
      resize: none;
    }

    button {
      padding: 1rem 6rem;
      text-transform: uppercase;
    }
  }

  @media (max-width: 960px) {
    .contacts {
      flex-direction: column;
      button {
        width: 100%;
        flex-direction: column;
      }
    }
  }
`;
export const ContainerSucces = styled.div`
  margin-top: 10rem;
  text-align: center;

  button {
    border-radius: 0.6rem;
    padding: 1rem;
    margin-top: 0.8rem;
    text-transform: uppercase;
    text-align: center;
    color: #fbfbfb;
  }
`;
