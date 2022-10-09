import { Drawer } from '@material-ui/core'
import React from 'react'
import Form from '../components/Form/Form'

const CreateFormDrawer = ({isOpen,handleClose}) => {
  return (
    <Drawer open={isOpen} onClose={handleClose}>
        <div className='w-[30vw] pt-16'>
        <Form/>
        </div>
    </Drawer>
  )
}

export default CreateFormDrawer