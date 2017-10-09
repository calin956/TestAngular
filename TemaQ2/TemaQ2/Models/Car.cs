using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace TemaQ2.Models
{
    public class Car
    {
        public Guid CarId { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Engine { get; set; }
        public string Color { get; set; }
        [DisplayName("Number of doors")]
        public int NumberOfDoors { get; set; }
    }
}