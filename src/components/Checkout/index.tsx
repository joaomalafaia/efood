import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { getTotalPrice, parseToBrl } from '../../utils'

import { CheckoutContainer, InputBlock, InputGroup } from './styles'
import { ModalButton } from '../Dish/styles'

type Props = {
  visibility: string
}

const Checkout = ({ visibility = '' }: Props) => {
  const [openAddress, setOpenAddress] = useState(true)
  const [openPayment, setOpenPayment] = useState(false)

  const { items } = useSelector((state: RootReducer) => state.cart)

  const [purchase, { isSuccess, data }] = usePurchaseMutation()

  const goToAddress = () => {
    setOpenAddress(!openAddress)
    setOpenPayment(!openPayment)
  }

  const getInputError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      additionalDetails: '',
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiringMonth: '',
      expiringYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.string().min(9).max(9).required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      additionalDetails: Yup.string().notRequired(),

      cardDisplayName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      expiringMonth: Yup.number()
        .min(1)
        .max(12)
        .required('O campo é obrigatório'),
      expiringYear: Yup.number().min(2024).required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            number: Number(values.number),
            city: values.city,
            zipCode: values.zipCode,
            complement: values.additionalDetails
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiringMonth),
              year: Number(values.expiringYear)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  return (
    <>
      <CheckoutContainer className={visibility}>
        {isSuccess ? (
          <div>
            <h3>Pedido realizado - {data.orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Link to="/">
              <ModalButton type="button" title="Concluir">
                Concluir
              </ModalButton>
            </Link>
          </div>
        ) : (
          <form onSubmit={form.handleSubmit}>
            {openAddress ? (
              <>
                <h3>Entrega</h3>
                <InputGroup>
                  <label htmlFor="fullName">Nome</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={getInputError('fullName') ? 'error' : ''}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="address">Endereço</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={form.values.address}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={getInputError('address') ? 'error' : ''}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={getInputError('city') ? 'error' : ''}
                  />
                </InputGroup>
                <InputBlock>
                  <InputGroup>
                    <label htmlFor="zipCode">CEP</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={form.values.zipCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getInputError('zipCode') ? 'error' : ''}
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="number">Número</label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      value={form.values.number}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getInputError('number') ? 'error' : ''}
                    />
                  </InputGroup>
                </InputBlock>
                <InputGroup className="marginBottom">
                  <label htmlFor="additionalDetails">Complemento</label>
                  <input
                    type="text"
                    id="additionalDetails"
                    name="additionalDetails"
                    value={form.values.additionalDetails}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </InputGroup>
                <ModalButton
                  title="Continuar com o pagamento"
                  onClick={() => {
                    goToAddress()
                    console.log(isSuccess)
                  }}
                  type="button"
                >
                  Continuar com o pagamento
                </ModalButton>
                <ModalButton title="Voltar para o carrinho" type="button">
                  Voltar para o carrinho
                </ModalButton>
              </>
            ) : (
              <>
                <h3>
                  Pagamento - Valor a pagar R${' '}
                  {parseToBrl(getTotalPrice(items))}
                </h3>
                <InputGroup>
                  <label htmlFor="cardDisplayName">Nome do cartão</label>
                  <input
                    type="text"
                    id="cardDisplayName"
                    name="cardDisplayName"
                    value={form.values.cardDisplayName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={getInputError('cardDisplayName') ? 'error' : ''}
                  />
                </InputGroup>
                <InputBlock>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getInputError('cardNumber') ? 'error' : ''}
                    />
                  </InputGroup>
                  <InputGroup className="max-width">
                    <label htmlFor="cardCode">CVV</label>
                    <input
                      type="text"
                      id="cardCode"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getInputError('cardCode') ? 'error' : ''}
                    />
                  </InputGroup>
                </InputBlock>
                <InputBlock>
                  <InputGroup>
                    <label htmlFor="expiringMonth">Mês de vencimento</label>
                    <input
                      type="text"
                      id="expiringMonth"
                      name="expiringMonth"
                      value={form.values.expiringMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getInputError('expiringMonth') ? 'error' : ''}
                    />
                  </InputGroup>
                  <InputGroup className="marginBottom">
                    <label htmlFor="expiringYear">Ano de vencimento</label>
                    <input
                      type="text"
                      id="expiringYear"
                      name="expiringYear"
                      value={form.values.expiringYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getInputError('expiringYear') ? 'error' : ''}
                    />
                  </InputGroup>
                </InputBlock>
                <ModalButton
                  title="Finalizar o pagamento"
                  type="submit"
                  onClick={() => {
                    form.handleSubmit()
                    console.log(isSuccess)
                  }}
                >
                  Finalizar o pagamento
                </ModalButton>
                <ModalButton
                  title="Voltar para a edição de endereço"
                  onClick={goToAddress}
                  type="button"
                >
                  Voltar para a edição de endereço
                </ModalButton>
              </>
            )}
          </form>
        )}
      </CheckoutContainer>
    </>
  )
}

export default Checkout
