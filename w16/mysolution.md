<label for="">Examine your water consumption</label>
<select name="waterConsumption" required>
<option value="">---Select Owned Appliances and Usage per Week---</option>
<option value="both_9+">Dish washer and washing machine (more than 9 times per week)</option>
<option value="both_4to9">Dish washer and washing machine (4 to 9 times per week)</option>
<option value="both_1to3">Dish washer and washing machine (1 to 3 times per week)</option>
<option value="one_9+">Only washing machine (more than 9 times per week)</option>
<option value="one_4to9">Only washing machine (4 to 9 times per week)</option>
<option value="one_1to3">Only washing machine (1 to 3 times per week)</option>
</select>


calculateWaterConsumptionPoints() {
 * For both appliances
    if (this.waterConsumption === "both_9+") {
        this.waterConsumptionPoints = 6;
    } else if (this.waterConsumption === "both_4to9") {
        this.waterConsumptionPoints = 4;
    } else if (this.waterConsumption === "both_1to3") {
        this.waterConsumptionPoints = 2;
    }
 * For only washing machine
    else if (this.waterConsumption === "one_9+") {
        this.waterConsumptionPoints = 3;  
    } else if (this.waterConsumption === "one_4to9") {
        this.waterConsumptionPoints = 2;
    } else if (this.waterConsumption === "one_1to3") {
        this.waterConsumptionPoints = 1;
    }
}

