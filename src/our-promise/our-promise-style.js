import styled from "styled-components";
export const OurPromiseStyle = styled.div`
   .ourpromisebox{ padding-block: 50px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 1800px;
    margin: 1rem auto;
    border-radius: 10px;
}


    .title{
        font-weight: 600;
    font-size: 48px;
    text-align: center;
    font-family: "Work Sans", sans-serif;
    }

    @media screen and (max-width: 786px) {
    .kFEDrC .title {
        font-size: 32px;
    }
}

.sub-title{
    font-size: 18px;
    text-align: center;
    margin-block: 8px;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    color: rgb(86, 102, 131);
}
    .element{
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
    gap: 2rem;
    
    }
  .element_item{
  
    border-top: 4px solid;
    display: flex;
    max-width: 380px;
    gap: 20px;
    flex-direction: column;
    border-radius: 0px 0px 10px 10px;
    padding: 1.5rem;
    background-color: rgb(255, 255, 255);
    position: relative;
    
  }

  @media (max-width: 920px) {
    .item {
        gap: 10px;
    }
}

@media (max-width: 920px) {
    .item__title {
        font-size: 18px;
    }
}
.item_title{
    font-family: "Work Sans", sans-serif;
    font-weight: 600;
    font-size: 24px;
    color: rgb(119, 119, 119);
}
  .item{
      display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 17px;
  }


.element_content{
    font-family:"Work Sans", sans-serif;
    font-weight: 400px;
    font-size: 20px;
    color: rgb(86, 102, 131);

}
    * {
    box-sizing: border-box;
    list-style-type: none;
    margin: 0;
    padding: 0;
}
`;