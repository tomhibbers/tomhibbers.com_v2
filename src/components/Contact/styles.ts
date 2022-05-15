import styled from "styled-components";

export const Container = styled.section`


  margin-top: 20rem;

  header{
    text-align: center;
    h2{
      text-align: center;
      font-size: 4rem;
    }
    p{
      color: var(--green);
      font-weight: 500;
    }
  }

  .contacts{    
    display: flex;
    flex-wrap: wrap;
    a{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30%;
      gap: 2rem;
      background-color: var(--green);
      border-radius: 1.4rem;
      transition: background-color 0.25s;
      margin: 4rem 10% 4rem 10%;
      button{
        display: block;
        width: 100%;
        padding: 1.6rem 2.8rem;
        img{
          width: 4rem;
          height: 4rem;
        }
    }}
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      width:  100%;
    }
  }


  @media(max-width: 960px){
    .contacts{
      flex-direction: column;
      a{
        width: 80%;
        margin: 1rem 10% 1rem 10%;
        flex-direction: column;
      }
      div{
        width: 100%;
        margin: 1rem 0 1rem 0;
        flex-direction: column;
      }
    }
  }
  
`;