import getCategories from "@/actions/get-categories";
import { Category } from "@/types";
import { useEffect, useState } from "react";

export default async function ShopSidebar() {
  //const [productCategories, setProductCategories] = useState<Category[]>([]);

  const toggleSection = (section: string) => {
    switch (section) {
      case "categories":
        break;
      default:
        break;
    }
  };

  const productCategories = await getCategories();
  //console.log(productCategories);

  // const fetchCategories = async () => {
  //   setProductCategories(await getCategories());
  // };

  // useEffect(() => {
  //   fetchCategories();
  // }, []);

  return (
    <div className="shop__sidebar">
      {/* <div className="shop__sidebar__search">
        <form action="#">
          <input type="text" placeholder="Search..." />
          <button title="submit" type="submit">
            <span className="icon_search" />
          </button>
        </form>
      </div> */}
      <div className="shop__sidebar__accordion">
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-heading">
              <a
                data-toggle="collapse"
                data-target="#collapseOne"
                // onClick={() => toggleSection("categories")}
              >
                Categories
              </a>
            </div>
            <div
              id="collapseOne"
              className="show"
              data-parent="#accordionExample"
            >
              {true && (
                <div className="card-body">
                  <div className="shop__sidebar__categories">
                    <ul className="nice-scroll">
                      {productCategories &&
                        productCategories.map((item) => (
                          <li key={item.id}>
                            <a href="#">{item.name}</a>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* <div className="card">
            <div className="card-heading">
              <a
                data-toggle="collapse"
                data-target="#collapseFour"
                onClick={() => toggleSection("size")}
              >
                Size
              </a>
            </div>
            <div
              id="collapseFour"
              className="show"
              data-parent="#accordionExample"
            >
              {showSize && (
                <div className="card-body">
                  <div className="shop__sidebar__size">
                    <label htmlFor="xs">
                      xs
                      <input type="radio" id="xs" />
                    </label>
                    <label htmlFor="sm">
                      s
                      <input type="radio" id="sm" />
                    </label>
                    <label htmlFor="md">
                      m
                      <input type="radio" id="md" />
                    </label>
                    <label htmlFor="xl">
                      xl
                      <input type="radio" id="xl" />
                    </label>
                    <label htmlFor="2xl">
                      2xl
                      <input type="radio" id="2xl" />
                    </label>
                    <label htmlFor="xxl">
                      xxl
                      <input type="radio" id="xxl" />
                    </label>
                    <label htmlFor="3xl">
                      3xl
                      <input type="radio" id="3xl" />
                    </label>
                    <label htmlFor="4xl">
                      4xl
                      <input type="radio" id="4xl" />
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="card">
            <div className="card-heading">
              <a
                data-toggle="collapse"
                data-target="#collapseFive"
                onClick={() => toggleSection("colors")}
              >
                Colors
              </a>
            </div>
            <div
              id="collapseFive"
              className="show"
              data-parent="#accordionExample"
            >
              {showColors && (
                <div className="card-body">
                  <div className="shop__sidebar__color">
                    <label className="c-1" htmlFor="sp-1">
                      <input title="color" type="radio" id="sp-1" />
                    </label>
                    <label className="c-2" htmlFor="sp-2">
                      <input title="color" type="radio" id="sp-2" />
                    </label>
                    <label className="c-3" htmlFor="sp-3">
                      <input title="color" type="radio" id="sp-3" />
                    </label>
                    <label className="c-4" htmlFor="sp-4">
                      <input title="color" type="radio" id="sp-4" />
                    </label>
                    <label className="c-5" htmlFor="sp-5">
                      <input title="color" type="radio" id="sp-5" />
                    </label>
                    <label className="c-6" htmlFor="sp-6">
                      <input title="color" type="radio" id="sp-6" />
                    </label>
                    <label className="c-7" htmlFor="sp-7">
                      <input title="color" type="radio" id="sp-7" />
                    </label>
                    <label className="c-8" htmlFor="sp-8">
                      <input title="color" type="radio" id="sp-8" />
                    </label>
                    <label className="c-9" htmlFor="sp-9">
                      <input title="color" type="radio" id="sp-9" />
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
