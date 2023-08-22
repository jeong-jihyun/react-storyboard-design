import styled from "@emotion/styled";

const Input = styled.input`
    font-size: 1.2;
    padding: 8px;
    border-radius: 8px;
`;

interface Props{
    readonly value: string;
    readonly onChange: (text:string) => void;
}
export const TextInput = ({value, onChange} : Props) =>{
    return (
        <Input value={value} onChange={(e)=> onChange(e.target.value)}/>
    );
};