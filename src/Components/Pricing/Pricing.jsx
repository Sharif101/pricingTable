import classes from "./Pricing.module.css";
import subcribe from "../../assests/Subscriptions/Subcribe.png";
import tick from "../../assests/Subscriptions/Tick.png";
import cross from "../../assests/Subscriptions/Cross.png";
import percent from "../../assests/Subscriptions/Percent.png";
import { useState } from "react";

export default function Pricing() {
  const [duration, setDuration] = useState("month");

  return (
    <div className={classes.container}>
      <div className={classes.plans}>
        <p>Subscriptions Plans</p>
        <p>Choose the best plan for you</p>
        <div className={classes.packageBtn}>
          <p className={classes.month} onClick={() => setDuration("month")}>
            Monthly
          </p>
          <p className={classes.year} onClick={() => setDuration("year")}>
            Yearly
          </p>
        </div>
        <div className={classes.percent}>
          <img src={percent} alt="" />
          <p>
            <span>Save 45%</span> with Yearly Payment
          </p>
        </div>
      </div>
      <div className={classes.table}>
        {/* --------------------table heading------------------------- */}
        <div className={classes.tableHeader}>
          <div className={classes.features}>
            <div className={classes.featuresText}>
              <p>Features</p>
              <p>
                Get started with <span>Smart ClinicX</span>
              </p>
              <img src={subcribe} alt="" />
            </div>
          </div>
          <div className={classes.info}>
            <p>Free</p>
            <p>
              <sup>৳</sup> 0
            </p>
            <p>Free Forever</p>
            <button>Subscribe Now</button>
          </div>
          <div className={classes.info}>
            <p></p>
          </div>
          {duration === "month" && (
            <div className={classes.info}>
              <p>Standard Postpaid</p>
              <p>
                <sup>৳</sup> <strike>499</strike> 299
              </p>
              <p>
                <span>৳2</span> /Prescription per Patient
              </p>
              <button>Subscribe Now</button>
            </div>
          )}
          <div className={classes.info}>
            <p>Premium</p>
            <br />
            <a href="">Contact us</a> <br />
            <button className={classes.premiumBtn}>Subscribe Now</button>
          </div>
        </div>
        {/* ---------------table data-----------s------ */}
        <div className={classes.tableData}>
          <div className={classes.featuresData}>
            <div className={classes.infoData}>
              <p>Number of Patients</p>
            </div>
            <div className={classes.infoData}>
              <p>Number of Prescriptions</p>
            </div>
            <div className={classes.infoData}>
              <p>Clinic Registration</p>
            </div>
            <div className={classes.infoData}>
              <p>Clinic Profile</p>
            </div>

            <div className={classes.infoData}>
              <p>Clinic Details on Clinic Portal</p>
            </div>
            <div className={classes.infoData}>
              <p>Smart Appointment Management</p>
            </div>
            <div className={classes.infoData}>
              <p>Doctor List</p>
            </div>
            <div className={classes.infoData}>
              <p>E-Prescription</p>
            </div>
            <div className={classes.infoData}>
              <p>Patient Health Record (HER/EMR)</p>
            </div>
            <div className={classes.infoData}>
              <p>Admin Dashboard</p>
            </div>
            <div className={classes.infoData}>
              <p>Clinic Promotion through Ads</p>
            </div>
            <div>
              <p>Custom Solution as per Requirements</p>
            </div>
          </div>
          <div className={classes.info}>
            <div className={classes.infoIcon}>
              <p>N/A</p>
            </div>
            <div className={classes.infoIcon}>
              <p>N/A</p>
            </div>
            <div className={classes.infoIcon}>
              <p>
                <img src={tick} alt="" />
              </p>
            </div>
            <div className={classes.infoIcon}>
              <p>
                <img src={tick} alt="" />
              </p>
            </div>
            <div className={classes.infoIcon}>
              <p>
                <img src={tick} alt="" />
              </p>
            </div>
            <div className={classes.infoIcon}>
              <p>
                <img src={cross} alt="" />
              </p>
            </div>
            <div className={classes.infoIcon}>
              <p>
                <img src={cross} alt="" />
              </p>
            </div>
            <div className={classes.infoIcon}>
              <p>
                <img src={cross} alt="" />
              </p>
            </div>
            <div className={classes.infoIcon}>
              <p>
                <img src={cross} alt="" />
              </p>
            </div>
            <div className={classes.infoIcon}>
              <p>
                <img src={cross} alt="" />
              </p>
            </div>
            <div className={classes.infoIcon}>
              <p>
                <img src={cross} alt="" />
              </p>
            </div>
            <div className={classes.infoIcon}>
              <p>
                <img src={cross} alt="" />
              </p>
            </div>
          </div>

          <div className={classes.info}>
            <div className={classes.recommended}>
              <div className={classes.recommendedText}>
                <p>Standard Prepaid</p>
                <p>
                  <sup>৳ </sup>
                  <strike>{duration === "month" ? "2999" : "3500"}</strike> 2499
                </p>
                <p>Free Trail for 1 Month</p>
                <button>Subscribe Now</button>
              </div>
              <div className={classes.text}>
                <div className={classes.infoIcon}>
                  <p>Unlimited</p>
                </div>
                <div className={classes.infoIcon}>
                  <p>Unlimited</p>
                </div>
                <div className={classes.infoIcon}>
                  <p>
                    <img src={tick} alt="" />
                  </p>
                </div>
                <div className={classes.infoIcon}>
                  <p>
                    <img src={tick} alt="" />
                  </p>
                </div>
                <div className={classes.infoIcon}>
                  <p>
                    <img src={tick} alt="" />
                  </p>
                </div>
                <div className={classes.infoIcon}>
                  <p>
                    <img src={tick} alt="" />
                  </p>
                </div>
                <div className={classes.infoIcon}>
                  <p>
                    <img src={tick} alt="" />
                  </p>
                </div>
                <div className={classes.infoIcon}>
                  <p>
                    <img src={tick} alt="" />
                  </p>
                </div>
                <div className={classes.infoIcon}>
                  <p>
                    <img src={tick} alt="" />
                  </p>
                </div>
                <div className={classes.infoIcon}>
                  <p>
                    <img src={cross} alt="" />
                  </p>
                </div>
                <div className={classes.infoIcon}>
                  <p>
                    <img src={cross} alt="" />
                  </p>
                </div>
                <div className={classes.infoIcon}>
                  <p>
                    <img src={cross} alt="" />
                  </p>
                </div>
              </div>
            </div>
          </div>
          {duration === "month" && (
            <div className={classes.info}>
              <div className={classes.infoIcon}>
                <p>&lt;1000</p>
              </div>
              <div className={classes.infoIcon}>
                <p>&lt;1000</p>
              </div>
              <div className={classes.infoIcon}>
                <p>
                  <img src={tick} alt="" />
                </p>
              </div>
              <div className={classes.infoIcon}>
                <p>
                  <img src={tick} alt="" />
                </p>
              </div>
              <div className={classes.infoIcon}>
                <p>
                  <img src={tick} alt="" />
                </p>
              </div>
              <div className={classes.infoIcon}>
                <p>
                  <img src={tick} alt="" />
                </p>
              </div>
              <div className={classes.infoIcon}>
                <p>
                  <img src={tick} alt="" />
                </p>
              </div>
              <div className={classes.infoIcon}>
                <p>
                  <img src={tick} alt="" />
                </p>
              </div>
              <div className={classes.infoIcon}>
                <p>
                  <img src={tick} alt="" />
                </p>
              </div>
              <div className={classes.infoIcon}>
                <p>
                  <img src={cross} alt="" />
                </p>
              </div>
              <div className={classes.infoIcon}>
                <p>
                  <img src={cross} alt="" />
                </p>
              </div>
              <div className={classes.infoIcon}>
                <p>
                  <img src={cross} alt="" />
                </p>
              </div>
            </div>
          )}
          <div className={classes.info}>
            <div className={classes.infoIcon}>
              <p>Unlimited</p>
            </div>
            <div className={classes.infoIcon}>
              <p>Unlimited</p>
            </div>
            <div className={classes.infoIcon}>
              <p>
                <img src={tick} alt="" />
              </p>
            </div>
            <div className={classes.infoIcon}>
              <p>
                <img src={tick} alt="" />
              </p>
            </div>
            <div className={classes.infoIcon}>
              <p>
                <img src={tick} alt="" />
              </p>
            </div>
            <div className={classes.infoIcon}>
              <p>
                <img src={tick} alt="" />
              </p>
            </div>
            <div className={classes.infoIcon}>
              <p>
                <img src={tick} alt="" />
              </p>
            </div>
            <div className={classes.infoIcon}>
              <p>
                <img src={tick} alt="" />
              </p>
            </div>
            <div className={classes.infoIcon}>
              <p>
                <img src={tick} alt="" />
              </p>
            </div>
            <div className={classes.infoIcon}>
              <p>
                <img src={tick} alt="" />
              </p>
            </div>
            <div className={classes.infoIcon}>
              <p>
                <img src={tick} alt="" />
              </p>
            </div>
            <div className={classes.infoIcon}>
              <p>
                <img src={tick} alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
