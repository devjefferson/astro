import { EffectPolygon } from '@/components/EffectPolygon'
import ConsumerForm from './__fetuares/Form'
export default async function Page() {

  return (
    <div  className="relative" ><EffectPolygon x="left"/>
    <EffectPolygon x='right' />
    <div className="mx-auto w-full px-medium py-giant container md:w-[640px] md:px-0 ">
      <ConsumerForm />
      
    </div>
    </div>
  )
}
