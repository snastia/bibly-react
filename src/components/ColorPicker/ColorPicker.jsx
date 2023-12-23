import { Container, Title, ColorpickerOption} from "./ColorPicker.styled"

export const ColorPicker = ({options}) => {
    return (
        <Container>
            <Title>Color Picker</Title>
            {options.map(({label, color})=>(
                <ColorpickerOption key={label} 
                     bgc={color}>
                    <span>{label}</span>
                </ColorpickerOption>
            ))}
        </Container>
    )
}