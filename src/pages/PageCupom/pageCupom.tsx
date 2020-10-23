import React, { useState } from 'react';
import Container from '@material-ui/core/Container/Container';
import { Formik, Form } from 'formik';
import { Button, FormControl, FormControlLabel, Grid, InputAdornment, InputLabel, Radio, Select, TextField, Typography } from '@material-ui/core';
import { ICupom } from '../../interfaces/ICupom';


const PageCupom: React.FC = () => {

    const [ cupomForm, setCupomForm ] = useState<ICupom>({
        ownerId: '',   
        paidByMeep: true,   
        name: '',    
        description: '',    
        imageUrl: '',    
        value: 0,    
        maxValue: 0,
        minOrderValue: 0,  
        valueType: 0,
        type: 0,
        appliedIn: 0,
        startAt: new Date(),
    })

    const handleSubmit = () => {
        console.log(cupomForm);                
    }

  const [selectedValue, setSelectedValue] = useState(cupomForm.paidByMeep);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value === 'true' );
    // console.log(selectedValue)

    setCupomForm(prevState => ({
      ...prevState,
      ...{ paidByMeep : selectedValue }
    }))
  };

  const handleSelectChange = (event: React.ChangeEvent<{ name?: string; value: any }>) => {
    const value = event.target.value;
    const name = event.target.name;

    // console.log(event.target.value)

    if (name){
      setCupomForm(prevState => ({
        ...prevState,
        ...{ [name] : value }
      }))
    }
  };


  return (
  <Container maxWidth="md">
    <h1>Formulário Cupom</h1>
      <Formik
        initialValues={cupomForm}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => <Form onSubmit={handleSubmit} className="form" >

          <Grid spacing={2} container className="form-styles">

            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Id do cliente:"
                id="ownerId"
                name="ownerId"
                value={cupomForm.ownerId}
                onChange={handleSelectChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
                <Typography variant="h6" gutterBottom color="textSecondary" >
                  Pago com Meep: 
                </Typography>

                <FormControlLabel
                  value="true"
                  control={
                    <Radio
                      checked={selectedValue === false}
                      onChange={handleChange}
                      value={false}
                      name="radio-button-true"
                      inputProps={{ 'aria-label': 'Não' }}
                    />}
                  label="Sim"
                  labelPlacement="start"
                />
                
                <FormControlLabel
                  value="false"
                  control={
                    <Radio
                      checked={selectedValue === true}
                      onChange={handleChange}
                      value={true}
                      name="radio-button-false"
                      inputProps={{ 'aria-label': 'Sim' }}
                    />}
                  label="Não"
                  labelPlacement="start"
                />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Nome:"
                id="name"
                name="name"
                value={cupomForm.name}
                onChange={handleSelectChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Descrição:"
                id="description"
                name="description"
                value={cupomForm.description}
                onChange={handleSelectChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Url da imagem:"
                id="imageUrl"
                name="imageUrl"
                value={cupomForm.imageUrl}
                onChange={handleSelectChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Valor:"
                id="value"
                name="value"
                value={cupomForm.value}
                onChange={handleSelectChange}
                InputProps={{
                  startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                }}
              />
            </Grid>

            <Grid item sm={6} xs={12}>

              <TextField
                fullWidth
                variant="outlined"
                label="Valor máximo:"
                id="maxValue"
                name="maxValue"
                value={cupomForm.maxValue}
                onChange={handleSelectChange}
                InputProps={{
                  startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                }}
                type="number"
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Valor mínimo do pedido:"
                id="minOrderValue"
                name="minOrderValue"
                value={cupomForm.minOrderValue}
                onChange={handleSelectChange}
                InputProps={{
                  startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                }}
                type="number"
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <FormControl style={{width: '100%'}} variant="outlined" /* className={classes.formControl} */>
                <InputLabel htmlFor="valueType">Value Type</InputLabel>
                <Select
                  native
                  value={cupomForm.valueType}
                  onChange={handleSelectChange}
                  label="valueType"
                  inputProps={{
                    name: 'valueType',
                    id: 'valueType',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
            </Grid>

            <Grid item sm={6} xs={12}>
              <FormControl style={{width: '100%'}} variant="outlined" /* className={classes.formControl} */>
                <InputLabel htmlFor="type">Type</InputLabel>
                <Select
                  native
                  value={cupomForm.type}
                  onChange={handleSelectChange}
                  label="type"
                  inputProps={{
                    name: 'type',
                    id: 'type',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
            </Grid>

            <Grid item sm={6} xs={12}>
              <FormControl style={{width: '100%'}} variant="outlined" /* className={classes.formControl} */>
                <InputLabel htmlFor="appliedIn">appliedIn</InputLabel>
                <Select
                  native
                  value={cupomForm.appliedIn}
                  onChange={handleSelectChange}
                  label="appliedIn"
                  inputProps={{
                    name: 'appliedIn',
                    id: 'appliedIn',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField                
                type="date"
                fullWidth
                variant="outlined"
                label="startAt:"
                id="startAt"
                name="startAt"
                value={cupomForm.startAt}
                onChange={handleSelectChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                type="date"
                fullWidth
                variant="outlined"
                label="finishAt:"
                id="finishAt"
                name="finishAt"
                value={cupomForm.finishAt}
                onChange={handleSelectChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
        </Form>}
      </Formik>
  </Container>
  );
}

export default PageCupom;