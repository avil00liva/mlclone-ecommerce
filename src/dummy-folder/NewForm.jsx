// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Col, Input, Form, Button, Label, Row, FormFeedback } from 'reactstrap'
import Select from 'react-select'

import { useForm, Controller } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { getCountries, getLanguajes } from '../services/tables'

import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import {userDataActions} from "../redux/userData"

const loadingMsg = 
  <Card>
  <CardHeader>
    <CardTitle tag='h4' style={{width: "100%"}}>
      <span className='text-gray'
        style={{fontWeight: "700", fontSize: "30px", marginRight: "20%"}}
      >
        Loading...
      </span>
    </CardTitle>
  </CardHeader>
  </Card>

const errorMsg = 
  <Card>
    <CardHeader>
      <CardTitle tag='h4' style={{width: "100%"}}>
        <span className='text-danger'
          style={{textTransform: "uppercase", fontWeight: "700", fontSize: "30px", marginRight: "20%"}}
        >
          Error
        </span>
      </CardTitle>
    </CardHeader>
    </Card>

const UserForm = () => {
  const stateTest = useSelector(state => state.userData.formData)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [fetchError, setFetchError] = useState(false)
  const [countryOptions, setCountryOptions] = useState([])
  const [languageOptions, setLanguageOptions] = useState([])

  /*
    Esquema de yup, en startUpName coloquÃ© como mÃ­nimo 1 pero se puede cambiar
    tambien se le puede aÃ±adir un max() si se quiere,
    falta validar los select
    â†“â†“â†“â†“â†“â†“â†“â†“â†“â†“â†“â†“ */
  const SignupSchema = yup.object().shape({
    email: yup.string().email().required(),
    lastName: yup.string().min(3).max(20).required(),
    firstname: yup.string().min(3).max(20).required(),
    startUpName: yup.string().min(1).required(),
    nEnterpreneurs: yup.number().min(1).required(),
    MVPcheck: yup.boolean().required(),
    anualSale: yup.number().min(1).required()
  })

  const { 
    handleSubmit, 
    control,
    reset,
    formState: {errors}} = 
    useForm({
        mode: 'onChange', 
        resolver: yupResolver(SignupSchema)
    })

  const parseData = (data) => {
    return {...data, 
      nEnterpreneurs: +data.nEnterpreneurs,
      country: data.country ? data.country.value : undefined,
      language: data.language ? data.language.value : undefined
    }
  }

  const parseOptions = (listValues) => {
    return listValues.map(val => {
      return {
        value: val, 
        label: val.charAt(0).toUpperCase() + val.slice(1)
      }
    })
  }

  useEffect(() => {
    const getSelectsData = async () => {
      try {
        setLoading(true)
        const languages = await getLanguajes()
        const countries = await getCountries()
        setLanguageOptions(parseOptions(languages))
        setCountryOptions(parseOptions(countries))
        setLoading(false)
      } catch (err) {
        setLoading(false)
        setFetchError(true)
      }
    }
    getSelectsData()
  }, [])

  /* uso reset para reestablecer los values a su estado de default, supongo que se puede poner 
    reset({..etc}) directamente en la funcion de submitDataUser
  */
  const resetInputValues = () => {
    reset({
      firstname: "",
      lastName: "",
      email: "",
      startUpName: "",
      nEnterpreneurs: "",
      MVPcheck: false,
      anualSale: ""
    })
  }

  const submitDataUser = (data) => {
    console.log(parseData(data))
    dispatch(userDataActions.getData(parseData(data)))
      resetInputValues()
      Swal.fire({
        title: 'Record added',
        text: '',
        icon: 'warning',
        iconColor: "#5E50EE",
        timer: 2000,
        showConfirmButton: false
      })
  }

  console.log(stateTest)

  if (fetchError) {
    //error message??
    return (
      errorMsg
    )
  }

  if (loading) {
    //loading spinner??
    return (
      loadingMsg
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4' style={{width: "100%"}}>
          <span className='text-primary'
            style={{textTransform: "uppercase", fontWeight: "700", fontSize: "30px", marginRight: "20%"}}
          >
            elq
          </span>
          User Data
        </CardTitle>
      </CardHeader>

      <CardBody>
        <Form onSubmit={handleSubmit(submitDataUser)}>
          <Row className='mb-1'>
            <Label sm='3' for='firstname'>
              First Name:
            </Label>
            <Col sm='5'>
              <Controller
                  defaultValue=''
                  name="firstname"
                  control={control}
                  render={({field}) => <Input 
                  type='text' 
                  name='firstname' 
                  id='firstname' 
                  placeholder=''
                  {...field}
                  invalid={errors.firstname && true}
                />}
              />
              {errors.firstname && <FormFeedback>{errors.firstname.message}</FormFeedback>}
            </Col>
          </Row>
          <Row className='mb-1'>
            <Label sm='3' for='lastName'>
              Last Name:
            </Label>
            <Col sm='5'>
                <Controller
                name="lastName"
                defaultValue=""
                control={control}
                render={({field}) => <Input 
                type='text' 
                name='lastName' 
                id='lastName' 
                placeholder=''
                {...field}
                invalid={errors.lastName && true}
                />}
              />
              {errors.lastName && <FormFeedback>{errors.lastName.message}</FormFeedback>}
            </Col>
          </Row>
          <Row className='mb-1'>
            <Label sm='3' for='email'>
              Email:
            </Label>
            <Col sm='5'>
              <Controller
                name="email"
                defaultValue=""
                control={control}
                render={({field}) => <Input 
                type='email' 
                name='email' 
                id='Email' 
                placeholder=''
                {...field}
                invalid={errors.email && true}
                />}
              />
              {errors.email && <FormFeedback>{errors.email.message}</FormFeedback>}
            </Col>
          </Row>

          <Row className='mb-1'>
            <Label sm='3' for='phone'>
              Phone:
            </Label>
            <Col sm='5'>
              <Controller
                name="phone"
                defaultValue=""
                control={control}
                render={({field}) => <Input 
                type='number' 
                name='phone' 
                id='phone' 
                placeholder=''
                {...field}
                />}
              />
            </Col>
          </Row>
          <Row className='mb-1'>
            <Label sm='3'>Country:</Label>
            <Col sm='4'>
            <Controller
              name="country"
              control={control}
              defaultValue= {{ value: "", label: "Select Country" }}
              render={({field}) => <Select
              className='react-select'
              classNamePrefix='select'
              defaultValue= ""
              options={countryOptions}
              isClearable={false}
              {...field}
              />}
            />
          </Col>
          </Row>
          <Row className='mb-1'>
            <Label sm='3'>Language:</Label>
            <Col sm='4'>
            <Controller
              name="language"
              control={control}
              defaultValue= {{ value: "", label: "Select Languaje" }}
              render={({field}) => <Select
              className='react-select'
              classNamePrefix='select'
              defaultValue=""
              options={languageOptions}
              isClearable={false}
              {...field}
            />}
            />
          </Col>
          </Row>
          <Row className='mb-1'>
            <Label sm='3' for='startUpName'>
              StartUp Name:
            </Label>
            <Col sm='5'>
              <Controller
                name="startUpName"
                defaultValue=""
                control={control}
                render={({field}) => <Input 
                type='text' 
                name='startUpName' 
                id='startUpName' 
                placeholder=''
                {...field}
                invalid={errors.startUpName && true}
                />}
              />
              {errors.startUpName && <FormFeedback>{errors.startUpName.message}</FormFeedback>}
            </Col>
          </Row>
          <Row className='mb-1'>
            <Label sm='3' for='nEnterpreneurs'>
              N. Enterpreneurs:
            </Label>
            <Col sm='5'>
              <Controller
                name="nEnterpreneurs"
                defaultValue=""
                control={control}
                render={({field}) => <Input 
                type='number' 
                name='nEnterpreneurs' 
                id='nEnterpreneurs' 
                placeholder=''
                {...field}
                invalid={errors.nEnterpreneurs && true}
                />}
              />
              {errors.nEnterpreneurs && <FormFeedback>{errors.nEnterpreneurs.message}</FormFeedback>}
            </Col>
          </Row>
          <Row className='mb-1'>
            <Label sm='3'>Do you have MVP?</Label>
            <Col sm='5'>
              <Controller
                name="MVPcheck"
                defaultValue = {false}
                control={control}
                render={({field}) => <Input 
                id='basic-cb-checked'
                type='checkbox' 
                name='MVPcheck'
                checked={field['value'] ?? false}
                {...field}
                />}
              />
            </Col>
          </Row>
          <Row className='mb-1'>
            <Label sm='3' for='anualSale'>
              Anual Sales:
            </Label>
            <Col sm='5'>
              <Controller
                name="anualSale"
                defaultValue=""
                control={control}
                render={({field}) => <Input 
                id='anualSale'
                type='number' 
                name='anualSale'
                {...field}
                invalid={errors.anualSale && true}
                />}
              />
              {errors.anualSale && <FormFeedback>{errors.anualSale.message}</FormFeedback>}
            </Col>
          </Row>
          <Row>
            <Col className='d-flex' md={{ size: 9, offset: 3 }}>
              <Button className='ms-auto' color='primary' type='submit'>
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}
export default UserForm