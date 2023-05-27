import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import "../styles/YeshMergejil.css";


function App() {
  const data = [
    {
      name: "МУИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_9u3os0mzy.png",
    },
    {
      name: "АШУҮИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_7c57vps1x5e.png",
    },
    {
      name: "МУБИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_4ravhnvjbpa.png",
    },
    {
      name: "ШУТИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_r51gbwd1rv.png",
    },
    {
      name: "ХУИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_r5gazqqdwkj.png",
    },
    {
      name: "ҮТА",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_rl83mymhams.png",
    },
    {
      name: "ХААИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_3i3titc6ujh.png",
    },
    {
      name: "ХҮИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_3bsmbhfh3hw.png",
    },
    {
      name: "ХИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_1scirhyrw9l.png",
    },
    {
      name: "ҮБХИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_5kmhkffqs4r.png",
    },
    {
      name: "УБИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_kt17wb9jvs8.png",
    },
    {
      name: "ТЗДС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_4z7r8zmhgzf.png",
    },
    {
      name: "СЭЗИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_rdctdv4rx4.png",
    },
    {
      name: "МУК",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_vtmm1tj3z3.png",
    },
    {
      name: "МГХАМТИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_1yslerizogw.png",
    },
    {
      name: "МИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_btile0kbtr.png",
    },
    {
      name: "ДХИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_1ca2fr560avj.png",
    },
    {
      name: "СУИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_wq2esybrx7b.png",
    },
    {
      name: "ДИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_ouetxstaxh.png",
    },
    {
      name: "ГДС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_wq2qyzne27n.png",
    },
    {
      name: "БШДС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_sb5ethz14tj.png",
    },
    {
      name: "БТК",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_w2zbhunchi.png",
    },
    {
      name: "МҮИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_yscw0tdog2t.png",
    },
    {
      name: "ШХХЗИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_qag14tstimm.png",
    },
    {
      name: "УЭДС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_m0lqc3q3iws.png",
    },
    {
      name: "MIU",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_cs6mxtwm1m.png",
    },
    {
      name: "ЭИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_6h5r6qtw63h.png",
    },
    {
      name: "ИЗОУИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_96xx9xf2t5w.png",
    },
    {
      name: "КУДС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_rl46gli1im.jpg",
    },
    {
      name: "БСЭЗДС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_rnozkondy9m.jpg",
    },
    {
      name: "ГУИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_ut35ifbtctl.jpg",
    },
    {
      name: "ДДС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_s4ldqhpd9y.jpg",
    },
    {
      name: "Хүрээ дээд сургууль",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_qpsqw8x39eh.png",
    },
    {
      name: "“Ач” АУИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_lhdy05g70bb.png",
    },
    {
      name: "Гурвантамир дээд сургууль",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_e0e04r7euvt.png",
    },
    {
      name: " “Гурван-Эрдэнэ” Багшийн Дээд Сургууль",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_rw04l27fgtl.jpg",
    },
    {
      name: "  ИЗОУИС-ийн харьяа Дүрслэх Урлаг Дизайн Технологийн Дээд Сургууль ",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_lp4dmz8ex3.jpg",
    },
    {
      name: "“ЗАСАГТ ХАН” ДЭЭД СУРГУУЛЬ",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_ak4wirhtoaj.jpg",
    },
    {
      name: "Зүүн Хүрээ Коллеж",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_sq44phxswaj.jpg",
    },
    {
      name: "Маргад дээд сургууль",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_fqmqg4j3nhv.jpg",
    },
    {
      name: "МОН-АЛТИУС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_sc8yep8gyq.png",
    },
    {
      name: "МХНУДС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_4j8cc5s5rml.png",
    },
    {
      name: "ОУСДС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_5ssysywx46m.jpg",
    },
    {
      name: "ОУЭЗБДС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_jidjpqla6e.jpg",
    },
    {
      name: "Орхон Их Сургууль",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_styjp47ohti.jpg",
    },
    {
      name: "ОМИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_92cd09t6p4o.jpg",
    },
    {
      name: "“РОЯАЛЬ АКАДЕМИ”",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_l59m1oq4b7.jpg",
    },
    {
      name: "Сан Их Сургууль",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_kxfvq7ow30a.jpg",
    },
    {
      name: "Сити дээд сургууль ",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_8uv6m5gikjf.jpg",
    },
    {
      name: "СоЭДС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_ndj3tucbb7o.jpg",
    },
    {
      name: "Сэрүүлэг их сургууль",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_vg1y2hds0nq.jpg",
    },
    {
      name: "КООСЭН ТК",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_mm6vaw6beu.png",
    },
    {
      name: "Түшээ дээд сургууль",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_eoph5ieuo8a.jpg",
    },
    {
      name: "Тэнгэр дээд сургууль",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_8ceadgijv2r.png",
    },
    {
      name: "“Эко-Ази”  Байгаль орчин, менежментийн дээд сургууль",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_tgj7p6ipum8.png",
    },
    {
      name: "Улаанбаатар Эрдэм Их Сургууль",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_j5wi86lnnhd.jpg",
    },
    {
      name: "ҮБТД",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_lq7lu6g56w.png",
    },
    {
      name: "ДАРХАН - ХААИС АЭБС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_naanbwuew4.png",
    },
    {
      name: "Хангай дээд сургууль",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_dif8iulpft.jpg",
    },
    {
      name: "Хөдөлмөр нийгмийн харилцааны дээд сургууль",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_aigy99qpb2j.png",
    },
    {
      name: "Билиг дээд сургууль",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_ks6qfbspiv.png",
    },
    {
      name: "Далай ван дээд сургууль",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_ui1m5xt5i3k.png",
    },
    {
      name: "Хүмүүнлэгийн дээд сургууль",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_xv2qkyeohbj.png",
    },
    {
      name: "ХИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_rwmumunbbh.png",
    },
    {
      name: " ХИДС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_somk884esio.jpg",
    },
    {
      name: "Хятад Монголын хамтарсан олон улсын дээд сургууль",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_rwmy0m3jww.png",
    },
    {
      name: "Чингис хаан дээд сургууль",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_o741ji0srw.jpg",
    },
    {
      name: "ШАУИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_ojhln5jkmpr.png",
    },
    {
      name: "Шинэ иргэншил дээд сургууль",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_hop1ejf7o7l.jpg",
    },
    {
      name: "ЭЗШУИС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_6eyj3rdf88r.png",
    },
    {
      name: "Энэрэл дээд сургууль",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_5gp3zsebzhy.jpg",
    },
    {
      name: "ИрГУПС",
      image:
        "https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_l6131ra92dr.jpg",
    },
  ];

  return (
    <>
      <div class="YeshEverything">
        <div class="YeshUniversityCount"  style={{  display: "flex" }}>
          University 72
        </div>
        <div className="stackContainer">
          <div className="stack"gap={7} >
            {data.map((el) => {
              return (
                <div>
                  <Card style={{ width: "10rem", border:"none", display:"flex", justifyContent:"center", justifyContent:"space-between" }}>
                  <div className="imgContainer">
                    <Card.Img variant="top" src={el.image} className="img" />
                    </div>
                  <Card.Body>
                    <Card.Title style={{width: "10rem",display:"flex", justifySelf:"center"}}> {el.name}</Card.Title>
                  </Card.Body>
                </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;