using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TemaQ2.Models
{
    public class CarRepository : ICarRepository, IDisposable
    {
        private ApplicationDbContext context;

        public CarRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public void AddCar(Car car)
        {
            context.Cars.Add(car);
        }

        public void DeleteCar(Guid id)
        {
            Car car = context.Cars.Find(id);
            context.Cars.Remove(car);
        }

        public void Edit(Car car)
        {
            context.Entry(car).State = System.Data.Entity.EntityState.Modified;
        }

        public Car GetCar(Guid id)
        {
            return context.Cars.Find(id);
        }

        public List<Car> GetCars()
        {
            return context.Cars.ToList();
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public void Dispose()
        {
            if (context != null)
                context.Dispose();
            GC.SuppressFinalize(this);
        }
    }
}