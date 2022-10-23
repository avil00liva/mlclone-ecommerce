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
    </Card>
  )
}
export default UserForm