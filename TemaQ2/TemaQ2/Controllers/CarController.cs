using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TemaQ2.Models;

namespace TemaQ2.Controllers
{
    public class CarController : Controller
    {
        ICarRepository carRepository;

        public CarController()
        {
            carRepository = new CarRepository(new ApplicationDbContext());
        }

        public CarController(ICarRepository carRepository)
        {
            this.carRepository = carRepository;
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(string name,string type,string engine,string color,int numberOfDoors)
        {
            Car newCar = new Car() { CarId=Guid.NewGuid(),Name= name, Type=type,Engine=engine,Color=color,NumberOfDoors=numberOfDoors};
            carRepository.AddCar(newCar);
            carRepository.Save();
            return Redirect("Index");
        }

        public ActionResult Edit(Guid id)
        {
            return View();
        }

        #region get the jsons...

        public JsonResult GetCarsJson()
        {
            return new JsonResult { Data = carRepository.GetCars(), JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }

        #endregion
    }
}