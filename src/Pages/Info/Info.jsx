import "./Info.scss"

export default function Info({data}) {
  return (
    <div className="fullInfo">
            {data.map((item) => {
        return (
<div id = {item.id} key={item.id} className="card">
  <p className="number">{item.id}</p>
  <p className="title">{item.title}</p>
  <p className="bodyCard">{item.body}</p>
</div>

        );
      })}

    </div>
  )
}
