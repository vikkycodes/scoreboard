import styled from "styled-components";


const Flex = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    white-space: nowrap;
    padding: 10px 8px;
    background: hsl(228, 12%, 44%);
    margin-bottom: 5px;
    color: #ccc;
    border-radius: 10px;
    cursor: pointer;

    & > div{
        padding: 5px;
    }

    & > img{
        width: 30px;
        border-radius: 30px;
    }
    @media screen and (min-width:768px){
        width: 150%;
    }
    
`


const Board = ({interns, onReward, onPage}) => {

 
    return (  
        <div>
            {interns && interns.map((data,i) =>(
                <Flex onClick={() => onPage(data)} key={i}>
                    <img src={`./${data.image}`} alt="" />
                    <div>{data.name}</div>
                    <div>{data.track}</div>
                    <div>{data.score}</div>
                </Flex>
            ))}
        </div>
      
    );
}
 
export default Board;