import { useSelector, useDispatch } from 'react-redux'
import InputMask from 'react-input-mask'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'

import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import { remove } from '../../store/reducers/cart'
import { getTotalPrice, parseToBrl } from '../../utils'

import * as S from './styles'
import { ModalButton } from '../Dish/styles'

const Cart = () => {
  /*CART SECTION*/
  const dispatch = useDispatch()
  const [showCheckout, setShowCheckout] = useState(false)
  const { items } = useSelector((state: RootReducer) => state.cart)

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  /*CHECKOUT SECTION*/
  const [openAddress, setOpenAddress] = useState(true)
  const [openPayment, setOpenPayment] = useState(false)

  const [purchase, { isSuccess, data, isLoading }] = usePurchaseMutation()

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
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  return (
    <>
      <S.CartSection className={showCheckout ? '' : 'visible'}>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h4>{item.nome}</h4>
                <p>{parseToBrl(item.preco)}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  title="Excluir item do carrinho"
                  type="button"
                />
              </div>
            </S.CartItem>
          ))}
        </ul>
        <S.Prices>
          <p>Valor total</p>
          <p>{parseToBrl(getTotalPrice(items))}</p>
        </S.Prices>
        <ModalButton
          onClick={() => setShowCheckout(!showCheckout)}
          title="Continuar com a entrega"
          type="submit"
        >
          Continuar com a entrega
        </ModalButton>
      </S.CartSection>
      <S.CheckoutContainer className={showCheckout ? 'visible' : ''}>
        {isSuccess && data ? (
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
                <S.InputGroup>
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
                </S.InputGroup>
                <S.InputGroup>
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
                </S.InputGroup>
                <S.InputGroup>
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
                </S.InputGroup>
                <S.InputBlock>
                  <S.InputGroup>
                    <label htmlFor="zipCode">CEP</label>
                    <InputMask
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={form.values.zipCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getInputError('zipCode') ? 'error' : ''}
                      mask="99999-999"
                    />
                  </S.InputGroup>
                  <S.InputGroup>
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
                  </S.InputGroup>
                </S.InputBlock>
                <S.InputGroup className="marginBottom">
                  <label htmlFor="additionalDetails">Complemento</label>
                  <input
                    type="text"
                    id="additionalDetails"
                    name="additionalDetails"
                    value={form.values.additionalDetails}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </S.InputGroup>
                <ModalButton
                  title="Continuar com o pagamento"
                  onClick={() => {
                    goToAddress()
                  }}
                  type="button"
                >
                  Continuar com o pagamento
                </ModalButton>
                <ModalButton
                  onClick={() => setShowCheckout(!showCheckout)}
                  title="Voltar para o carrinho"
                  type="button"
                >
                  Voltar para o carrinho
                </ModalButton>
              </>
            ) : (
              <>
                <h3>
                  Pagamento - Valor a pagar R${' '}
                  {parseToBrl(getTotalPrice(items))}
                </h3>
                <S.InputGroup>
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
                </S.InputGroup>
                <S.InputBlock>
                  <S.InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getInputError('cardNumber') ? 'error' : ''}
                      mask="9999 9999 9999 9999"
                    />
                  </S.InputGroup>
                  <S.InputGroup className="max-width">
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      type="text"
                      id="cardCode"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getInputError('cardCode') ? 'error' : ''}
                      mask="999"
                    />
                  </S.InputGroup>
                </S.InputBlock>
                <S.InputBlock>
                  <S.InputGroup>
                    <label htmlFor="expiringMonth">Mês de vencimento</label>
                    <InputMask
                      type="text"
                      id="expiringMonth"
                      name="expiringMonth"
                      value={form.values.expiringMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getInputError('expiringMonth') ? 'error' : ''}
                      mask="99"
                    />
                  </S.InputGroup>
                  <S.InputGroup className="marginBottom">
                    <label htmlFor="expiringYear">Ano de vencimento</label>
                    <InputMask
                      type="text"
                      id="expiringYear"
                      name="expiringYear"
                      value={form.values.expiringYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getInputError('expiringYear') ? 'error' : ''}
                      mask="99"
                    />
                  </S.InputGroup>
                </S.InputBlock>
                <ModalButton
                  title="Finalizar o pagamento"
                  type="submit"
                  onClick={() => {
                    form.handleSubmit()
                  }}
                >
                  {isLoading
                    ? 'Finalizando o pagamento...'
                    : 'Finalizar o pagamento'}
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
      </S.CheckoutContainer>
    </>
  )
}

export default Cart
