'use client'
import { Controller, UseFormReturn } from 'react-hook-form'
import masker from 'vanilla-masker'



import { serviceZipCode } from '@/services/zipcode'
import { TGetAddressByCodeResponse } from '@/models/zipCode'
import clsx from 'clsx'
import { Input } from '@/components/Input'


type ConsumerFormEditAddressProps = {
  form: UseFormReturn<any, any, undefined>
}

export default function ConsumerFormEditAddress({
  form,
}: ConsumerFormEditAddressProps) {
  const handleSearchZipCode = async (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    try {
      const zipCode = (e.currentTarget.value || '').replace(/\D/g, '')
      if (zipCode.length === 8) {
        const response = await serviceZipCode(zipCode)
        if (response.ok) {
          const address: TGetAddressByCodeResponse = response.data
          form.setValue('zipCode', address.cep)
          form.setValue('street', address.logradouro)
          form.setValue('district', address.bairro)
          form.setValue('state', address.uf)
          form.setValue('city', address.localidade)
        }
      }
    } catch (e) {
      // handle error
    }
  }

  return (
    <>
      <div className={clsx(['flex', 'flex-col', 'gap-8'])}>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 >Endereço</h2>
            <div className="grid lg:grid-cols-2 gap-4">
              <Controller
                control={form.control}
                name="zipCode"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    label="CEP"
                    autoComplete="off"
                    placeholder="00000-000"
                    onChange={(e) => {
                      const value = masker.toNumber(e.target.value).toString()
                      field.onChange(masker.toPattern(value, '99999-999'))
                    }}
                    onKeyUp={handleSearchZipCode}
  
                    helpText={fieldState.error?.message || ''}
                  />
                )}
              />

              <Controller
                control={form.control}
                name="street"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    autoComplete="off"
                    helpText={fieldState.error?.message}
                    label="Logradouro"
                    type="text"
                    placeholder="Rua, avenida, estrada..."
                  />
                )}
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              <Controller
                control={form.control}
                name="number"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    autoComplete="off"
                    helpText={fieldState.error?.message}
                    label="Número"
                    placeholder="000"
                    type="text"
                  />
                )}
              />

              <Controller
                control={form.control}
                name="complement"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    autoComplete="off"
                    helpText={fieldState.error?.message}
                    label="Complemento"
                    placeholder="Apt. 0 Bl. 0 (se houver)"
                    type="text"
                  />
                )}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            <Controller
              control={form.control}
              name="district"
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  autoComplete="off"
                  helpText={fieldState.error?.message}
                  label="Bairro"
                  placeholder="seu bairro"
                  type="text"
                />
              )}
            />

            <Controller
              control={form.control}
              name="state"
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  autoComplete="off"
                  helpText={fieldState.error?.message}
                  label="Estado"
                  placeholder="Seu estado"
                  type="text"
                />
              )}
            />
            <Controller
              control={form.control}
              name="city"
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  autoComplete="off"
                  helpText={fieldState.error?.message}
                  label="Cidade"
                  placeholder="Sua cidade"
                  type="text"
                />
              )}
            />
          </div>
        </div>
      </div>
    </>
  )
}
