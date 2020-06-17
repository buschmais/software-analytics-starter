    var convert = function (data) {
        var components = _.keyBy(_.map(data, function (element) {
            return {
                id : element.Parent_Fqn,
                name: element.Parent_Fqn,
                size: 50,
                parent: null,
                children: []
            };
        }), 'id');
        var types = _.keyBy(_.map(data, function (element) {
            if (element.Child_Is_Leaf == "True") {
                return {
                    id : element.Child_Fqn,
                    name: element.Child_Name,
                    size: 50,
                    parent: null,
                    children: []
                };
            }
        }), 'id');

        _.forEach(data, function (element) {
                var parent = components[element.Parent_Fqn];
                var child;
                if (element.Child_Is_Leaf == "True") {
                    child = types[element.Child_Fqn];
                } else {
                    child = components[element.Child_Fqn];
                }
                if (child !== null && parent.children.indexOf(child) === -1) {
                    parent.children.push(child);
                    child.parent = parent;            
                }
        });
        var rootComponents = _.filter(_.values(components), function (component) {
            return !component.parent;
        });
        return {
            name: "SARF",
            children: rootComponents
        }
    };