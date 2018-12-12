testing this pushing


writeData = (itemId) => {

  this.removeAuthListener = fire.auth().onAuthStateChanged(user=>{
  const sampleRef = fire.database().ref(`/workOrders/${user.uid}/${this.state.id}`);
  console.log("Fill em in");
  sampleRef.child("startDate").set(this.state.startDate);
  sampleRef.child("endDate").set(this.state.endDate);
  sampleRef.child("area").set(this.state.area);
  sampleRef.child("description").set(this.state.description);
  sampleRef.child("responsibility").set(this.state.responsibility);
  sampleRef.child("id").set(this.state.id);
});


}




  const chart = chartWrapper.getChart()

  const selection = chart.getSelection()

const [selectedItem] = selection
console.log(selectedItem.row)
console.log(selectedItem.column)
const dataTable = chartWrapper.getDataTable()
console.log(dataTable)

let startDate = dataTable.getValue(selectedItem.row,0)
let endDate = dataTable.getValue(selectedItem.row,1)

let area = dataTable.getValue(selectedItem.row,2)
let description = dataTable.getValue(selectedItem.row,3)
let responsibility = dataTable.getValue(selectedItem.row,4)
let id = dataTable.getValue(selectedItem.row,6)

const value= dataTable.getValue(selectedItem.row,0)
const value1= dataTable.getValue(selectedItem.row,1)
const value2= dataTable.getValue(selectedItem.row,2)
const value3= dataTable.getValue(selectedItem.row,3)
const value4= dataTable.getValue(selectedItem.row,4)
const value5= dataTable.getValue(selectedItem.row,5)

console.log(area);
console.log(startDate);




this.setState({

  startDate: startDate.toString(),
  endDate: endDate.toString(),
  area: area,
  description: description,
  responsibility: responsibility,
  id: id,





})
console.log(id)
console.log(area)
console.log(description)
console.log(responsibility)
console.log(startDate)
console.log(endDate)



}


<section className='display-item'>
    <div className="wrapper">
      <ul>
        {this.state.orders.map((order) => {
          console.log(order.area);


          return (
            <Table>
            <thead>

              <tr>

                <th>Start Date</th>
                <th>End Date</th>
                <th>Area</th>
                <th>Description</th>
                <th>Responsibility</th>

              </tr>
              <tr>
                <td>{order.startDate}</td>
                <td>{order.endDate}</td>
                <td>{order.area}</td>
                <td>{order.description}</td>
                <td>{order.responsibility}</td>
                <td><button onClick={() => this.fillStates(order.id)}>Edit Work Order</button></td>




                </tr>
                </thead></Table>








          )
        })}
      </ul>
    </div>

</section>
