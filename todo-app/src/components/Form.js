import Input from "./Input"
import Button from "./Button"

const Form = () => {
  return (
    <form>
        <Input type='text' placeholder='type todo'/>
        <Button type='submit' text='Create'/>
    </form>
  )
}

export default Form
