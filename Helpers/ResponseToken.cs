﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShinyBooking.Helpers
{
    public class ResponseToken
    {
        [JsonProperty(PropertyName = "id")]
        public string Id {get; set; }

         [JsonProperty(PropertyName = "userName")]
        public string UserName {get; set; }

         [JsonProperty(PropertyName = "_token")]
        public string AuthToken {get; set; }

         [JsonProperty(PropertyName = "_tokenExpirationDate")]
        public int ExpiresIn {get; set; }




    }
}
