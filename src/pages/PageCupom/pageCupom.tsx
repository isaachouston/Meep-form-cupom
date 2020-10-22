import React, { useState } from 'react';
import Container from '@material-ui/core/Container/Container';
import { Formik, Form } from 'formik';
import { Grid } from '@material-ui/core';
import { ICupom } from '../../interfaces/ICupom';




const PageCupom: React.FC = () => {

    const [ cupomForm, setCupomForm ] = useState<ICupom>({
        ownerId: '',   
        paidByMeep: false,   
        name: '',    
        description: '',    
        imageUrl: '',    
        value: 0,    
        maxValue: 0,
        minOrderValue: 0,  
        valueType: 0,
        type: 0,
        appliedIn: 0,        
    })

    const handleSubmit = () => {
        console.log(cupomForm);                
    }



  return (
  <Container>
    <h1>Formulário Cupom</h1>
      <Formik
        initialValues={cupomForm}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => <Form onSubmit={handleSubmit} className="form" >

          <Grid spacing={2} container className="form-styles">

          </Grid>
        </Form>}
      </Formik>
  </Container>
  );
}

export default PageCupom;