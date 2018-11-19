function logDriverNames(drivers) {
  drivers.forEach(function(driver, i, arr) {
    console.log(driver.name);
  });
};

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver, i, arr) {
    if (driver.hometown === location) {
      console.log(driver.name);
    };
  });
};

function driversByRevenue(drivers) {
  return drivers.slice(0).sort(function(first_driver, second_driver) {
    return first_driver.revenue - second_driver.revenue;
  });
};

function driversByName(drivers) {
  return drivers.slice(0).sort(function(first_driver, second_driver) {
    return first_driver.name.localeCompare(second_driver.name);
  });
};

function totalRevenue(drivers){
  return drivers.reduce(function(agg, driver, i, arr) {
    return agg += driver.revenue;
  }, 0);
};

function averageRevenue(drivers) {
  const total = totalRevenue(drivers);
  return total / drivers.length;
}
