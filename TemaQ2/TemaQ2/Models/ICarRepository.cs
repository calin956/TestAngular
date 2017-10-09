using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TemaQ2.Models
{
    public interface ICarRepository:IDisposable
    {
        List<Car> GetCars();
        Car GetCar(Guid id);
        void DeleteCar(Guid id);
        void Edit(Car car);
        void AddCar(Car car);
        void Save();
    }
}
