import styled from 'styled-components';

export const Container = styled.div`

    width: 100vw;
    letter-spacing: 2px;
    font-family: 'Karla', sans-serif;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 62.5%;
`;

export const Header = styled.div`

    background-color: hsl(0, 0%, 98%);
    width: 90%;
    max-width: 1440px;
    height: 80px;
    display: flex;

    justify-content: space-between;
    align-items: center;

    z-index: 2;

    font-size: 1rem;

    ul {

        display: flex;
        list-style-type: none;
    }
    
    li {
        margin-left: 20px;
        padding: 10px 10px;
        color:  hsl(273, 4%, 51%);
    }

    .button {
        cursor: pointer;

        border: 2px solid black;
        padding: 10px 20px;
        color: black;
    }   
`;

export const MainContent = styled.div`

    width: 100vw;
    background-color: hsl(256, 26%, 20%);   
    height: 70vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    

    .section {

        width: 90%;
        max-width: 1440px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        
        hr {
            width: 10rem;
            margin-bottom: 100px;
        }
    
        h1{
            font-size: 5rem;
            color: white;
        
            font-family: 'DM Serif Display', sans-serif;
            font-weight: 400;
            line-height: 4rem;
        }

        p{
            color: hsl(0, 0%, 98%);
            font-size: 1.3rem;
            margin-top: 30px;
            line-height: 2rem;
        }

        button {
            background-color: hsl(256, 26%, 20%); 
            color: white;
            padding: 15px 30px;
            border: 2px solid white;
            
            cursor: pointer;

            letter-spacing: 2px;

            margin-top: 40px;

            font-family: 'Karla', sans-serif;

            outline: none;
        }

        img:nth-child(1) {

            position: absolute;
            right: 0px;
            top: 0px;
            z-index: 1;
        }
        
        img:nth-child(2) {
            position: relative;
        
            top: 12rem;
        }
    }
`;

export const Process = styled.div`

    width: 90%;
    max-width: 1440px;

    margin-top: 300px;

    display: flex;
    flex-direction: column;

    font-family: 'DM Serif Display', sans-serif;
    font-weight: 200;

    .process_header {

        img {

            position: absolute;
            left: 0;
            bottom: 0px;
        }
    }

    hr {
        color: hsl(256, 26%, 20%); 
        width: 10rem;
        margin-bottom: 50px;
    }

    h1{
        color: hsl(270, 9%, 17%);

        font-size: 5rem;
    }

    .grid_group {

        margin-top: 60px;

        display: grid;

        grid-template-columns: repeat(3, 1fr);

        h2 {
            margin-top: 40px;
            font-size: 1.5rem;
            
        }

        p {
            font-family: 'Karla', sans-serif;
            margin-top: 20px;
            font-size: 1rem;

            color:  hsl(273, 4%, 51%);
        }
    }

    .modal {

        margin-top: 200px;
        margin-bottom: 150px;

        display: flex;

        width: 100%;
        max-width: 1440px;

        height: 30vh;

        display: flex;
        justify-content: space-around;
        align-items: center;
    
        background-color: hsl(256, 26%, 20%); 

        h1 {

            font-weight: 400;
            line-height: 4rem;
            color: white;
            font-size: 4rem
        }

        button {
            background-color: hsl(256, 26%, 20%); 
            color: white;
            padding: 15px 30px;
            border: 2px solid white;
            
            cursor: pointer;

            letter-spacing: 2px;

            margin-top: 40px;

            font-family: 'Karla', sans-serif;

            outline: none;
        }
    }
`;

export const Footer = styled.div`
    width: 100vw;
    height: 40vh;

    background-color: hsl(0, 0%, 98%);
`;
