using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ShinyBooking.Models
{
    public class Room
    {
        public Room()
        {
            Id = Guid.NewGuid().ToString();
        }

        public string Id { get; set; }

        [Required]
        [StringLength(200, ErrorMessage = "Name is required", MinimumLength = 2)]
        public string Name { get; set; }

        [Range(0, 5)]
        public double Rating { get; set; }

        [Required]
        [StringLength(255, ErrorMessage = "Description is required", MinimumLength = 2)]
        public string Description { get; set; }

        [Required]
        [Range(0, double.MaxValue, ErrorMessage = " Price must be greater than 0")]
        public double Price { get; set; }

        [Required]
        [Range(0, int.MaxValue, ErrorMessage = " Area must be greater than 0")]
        public int Area { get; set; }

        [Required]
        [Range(0, int.MaxValue, ErrorMessage = " Capacity must be greater than 0")]
        public int Capacity { get; set; }

        [Required]
        public IList<Photo> Photos { get; set; }

        public IList<RoomEquipment> RoomEquipments { get; set; }

        public IList<RoomActivities> RoomActivities {get; set;}
    }
}