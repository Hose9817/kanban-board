import {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, ButtonToggle } from 'reactstrap';


function Controller(props) {

    const [createMode, setCreateMode] = useState(false)
    const [nameInput, setNameInput] = useState('')
    const [statusInput, setStatusInput] = useState('')

    const createButtonHandler = () => {
        props.CreateTask(nameInput, statusInput)
        setCreateMode(false)
    }

    return (
        <div>
            <ButtonToggle color="primary" onClick={() => setCreateMode(true)}>Create</ButtonToggle>{' '}
            {createMode &&
                <>
                    <Modal isOpen={createMode} >
                        <ModalHeader >Create new Task</ModalHeader>
                        <ModalBody>
                            <Label >Name: </Label>
                            <Input type="text" placeholder="type name here" value={nameInput} onChange={(e) => setNameInput(e.target.value)}  />
                            <Label >Status: </Label>
                            <Input type="select" value={statusInput} onChange={(e) => setStatusInput(e.target.value)}>
                                <option value='todo'>To do</option>
                                <option value='progress'>Progress</option>
                                <option value='review'>Review</option>
                                <option value='done'>Done</option>
                            </Input>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={createButtonHandler} >Create new Task</Button>{' '}
                            <Button color="secondary" onClick={() => setCreateMode(false)}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </>
            }
        </div>
    )
}


export default Controller;