import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const {addItem,order,removeItem,tip,setTip,saveOrder} = useOrder()

  return (
    <>
      <header className="py-5 bg-teal-400">
        <h1 className="text-center text-4xl font-black">Calculadora de propinas y consumo</h1>
        <div className="grid justify-center mt-2">
          <img src="/money.png" alt="money" className="w-28"/>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-10 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-400 p-5 bg-slate-100 rounded-lg space-y-10">
          {order.length ? (
            <>
              <OrderContents
                order={order}
                removeItem={removeItem}
              />
              <TipPercentageForm
                setTip={setTip}
                tip={tip}
              />
              <OrderTotals
                order={order}
                tip={tip}
                saveOrder={saveOrder}
              />
            </>
          ) : (
            <p className="text-center">La orden está vacía</p>
          )}

        </div>
      </main>
    </>
  )
}

export default App
