function skillsMember(){
    return {
        restrict: 'E',
        templateUrl: 'module/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: 'Abdrahman'
        }
    }
}